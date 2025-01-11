import generateReceiptId from '../utils/receiptIDgenerator.js'
import { createBeneficiary, createPayout, fetchPayout } from '../utils/payOutPG.js';
import Transaction from '../model/model.transaction.js';


const payOuts = async (req, res) => {
    try {
        const details = req.body
        const beneficaryResponse = await createBeneficiary(details)

        if (!beneficaryResponse || !beneficaryResponse.status) {
            return res.status(500).json({ message: 'Issue in creating beneficiary' });
        }

        const receiptId = generateReceiptId()
        const payoutResponse = await createPayout(details, beneficaryResponse.beneficiary_id, receiptId)
        if (!payoutResponse || !payoutResponse.status) {
            return res.status(500).json({ message: 'Issue in creating payout' });
        }

        const fetchPayoutResponse = await fetchPayout(payoutResponse.transfer_id)

        if (!fetchPayoutResponse || !fetchPayoutResponse.status) {
            return res.status(500).json({ message: 'Issue in fetching payout' });
        }

        const savedtransaction = await Transaction.create({transactionHistory: fetchPayoutResponse})
        if (!savedtransaction) {
            return res.status(500).json({ message: 'Issue in saving transaction' });
        }
        res.status(200).json({ message: 'Payout created successfully', transactionHistory: fetchPayoutResponse });

    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }

}

export default payOuts; 