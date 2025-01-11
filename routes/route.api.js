import express from "express";
const router = express.Router();
import payOuts from "../controllers/payOut.js"; 


// callback url of order creating
// router.post('/callback-1', async (req, res) => {
//     try {
//         const callbackResponse = req.body; // Extract order_id from the callback payload
//         console.log('Callback received:', callbackResponse);
//         const { order_id } = req.body
//         console.log('Callback received for Order ID:', order_id);

//         if (!order_id) {
//             return res.status(400).json({ message: '--Order ID not provided in callback' });
//         }

//         // Call the Paytring API to verify the payment
//         const url = 'https://api.paytring.com/api/v2/order/fetch';
//         const options = {
//             method: 'POST',
//             headers: { accept: 'text/plain', 'content-type': 'application/json', authorization: "Basic dGVzdF9rZXk6dGVzdF9zZWNyZXQ=" },
//             body: JSON.stringify({ key: 'test_123', id: `${order_id}`, hash: callbackResponse.hash })
//         };


//         const response = await fetch(url, options)

//         if (!response) {
//             console.log("erroe")
//             return res.status(500).json({ message: 'Network response was not ok' });
//         }


//         console.log('Payment verification response:', response);
//         return res.status(200).json({ message: 'Payment verified successfully', data: response });


//         // Check payment status
//         // if (paymentStatus.status === 'success') {
//         //     console.log('Payment verified successfully for Order ID:', order_id);
//         //     // You can store payment details in your database here
//         //     res.status(200).json({
//         //         message: 'Payment verified successfully',
//         //         data: paymentStatus,
//         //     });
//         // } else {
//         //     console.error('Payment verification failed for Order ID:', order_id);
//         //     res.status(400).json({
//         //         message: 'Payment verification failed',
//         //         data: paymentStatus,
//         //     });
//         // }
//     } catch (error) {
//         console.error('Error verifying payment:', error.message);
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });
// // payout
// router.post("/payout-1", async (req, res) => {
//     const details = req.body

//     // for creating benificiary
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//         "key": "test_key",
//         "name": "Preetam Sharma2",
//         "phone": "07027445661",
//         "email": "preetam@mcsam.in",
//         "address": "MM Tower",
//         "account_number": "91702174456162",
//         "ifsc": "PYTM0123456",
//         "vpa": "7441112@paytm",
//         "hash": "sdf"
//     });

//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//     };

//     const beneficaryResponse = await fetch("https://api.paytring.com/api/v2/payout/beneficiary/create", requestOptions)


//     // create payout

//     const myHeaders1 = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization", "Basic dGVzdF9rZXk6dGVzdF9zZWNyZXQ=");

//     const raw1 = JSON.stringify({
//         "key": "test_key",
//         "pg": "paytring",
//         "account_number": "936551184504088577",
//         "beneficiary_id": "718384385753090526",
//         "method": "imps",
//         "amount": "100",
//         "receipt_id": "PYO0003",
//         "hash": "sdf"
//     });

//     const requestOptions1 = {
//         method: "POST",
//         headers: myHeaders1,
//         body: raw1,
//         redirect: "follow"
//     };

//     const payoutResponse = await fetch("https://api.paytring.com/api/v2/payout/create", requestOptions1)

//     // fetch payout

//     const myHeaders2 = new Headers();
//     myHeaders.append("REFERER", "localhost");
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization", "Basic dGVzdF9rZXk6dGVzdF9zZWNyZXQ=");

//     const raw2 = JSON.stringify({
//         "key": "test_key",
//         "id": "718385034247015348",
//         "fetch_type": "advance",
//         "hash": ""
//     });

//     const requestOptions2 = {
//         method: "POST",
//         headers: myHeaders2,
//         body: raw2,
//         redirect: "follow"
//     };

//     const fetchPayout = await fetch("https://api.paytring.com/api/v2/payout/fetch", requestOptions2)



// })


// Routes 

// priority
router.post("/payOut", payOuts)


// router.post("/payIn" ,payIn )
// router.post("/callback" , callback)

export default router;