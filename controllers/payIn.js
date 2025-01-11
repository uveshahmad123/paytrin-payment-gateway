import CryptoJS from 'crypto-js';
import fetch from 'node-fetch';

const payIn = async (req, res) => {
    try {
        const { amount, currency, callback_url, cname, email, phone, receipt_id, notes } = req.body;

        let params = { amount, currency, callback_url, cname, email, phone, receipt_id, notes };

        // Sort and create value string
        let sorted_params = Object.keys(params).sort().reduce((acc, key) => {
            acc[key] = params[key];
            return acc;
        }, {});

        let value_string = '';
        for (let key in sorted_params) {
            if (typeof sorted_params[key] !== 'object') {
                value_string += `${sorted_params[key]}|`;
            }
        }
        value_string += API_SECRET;

        // Generate hash
        const hash = CryptoJS.SHA512(value_string).toString();
        params.hash = hash;

        // Make the request to Paytring API
        const response = await fetch('https://api.paytring.com/api/v2/order/create/', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: AUTH_HEADER,
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();
        if (!data.order_id) {
            throw new Error('Failed to generate order');
        }

        res.json({ success: true, order_id: data.order_id });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export default payIn;