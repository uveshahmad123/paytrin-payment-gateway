import fetch from "node-fetch";

const callback = async (req, res) => {
    try {
        const callbackResponse = req.body; // Extract order_id from the callback payload
        console.log('Callback received:', callbackResponse);
        const { order_id } = req.body
        console.log('Callback received for Order ID:', order_id);

        if (!order_id) {
            return res.status(400).json({ message: '--Order ID not provided in callback' });
        }

        // Call the Paytring API to verify the payment
        const url = 'https://api.paytring.com/api/v2/order/fetch';
        const options = {
            method: 'POST',
            headers: { accept: 'text/plain', 'content-type': 'application/json', authorization: "Basic dGVzdF9rZXk6dGVzdF9zZWNyZXQ=" },
            body: JSON.stringify({ key: 'test_123', id: `${order_id}`, hash: callbackResponse.hash })
        };


        const response = await fetch(url, options)

        if (!response) {
            console.log("erroe")
            return res.status(500).json({ message: 'Network response was not ok' });
        }


        console.log('Payment verification response:', response);
        return res.status(200).json({ message: 'Payment verified successfully', data: response });


        // Check payment status
        // if (paymentStatus.status === 'success') {
        //     console.log('Payment verified successfully for Order ID:', order_id);
        //     // You can store payment details in your database here
        //     res.status(200).json({
        //         message: 'Payment verified successfully',
        //         data: paymentStatus,
        //     });
        // } else {
        //     console.error('Payment verification failed for Order ID:', order_id);
        //     res.status(400).json({
        //         message: 'Payment verification failed',
        //         data: paymentStatus,
        //     });
        // }
    } catch (error) {
        console.error('Error verifying payment:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }

}

// export the callback function
export default callback;    