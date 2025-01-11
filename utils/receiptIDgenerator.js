import crypto  from 'crypto'

function generateReceiptId() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const prefix = `${letters.charAt(crypto.randomInt(0, 26))}${letters.charAt(crypto.randomInt(0, 26))}`;
    const randomPart = crypto.randomInt(100000, 999999); // Secure 6-digit random number
    return `${prefix}${randomPart}`;
}

// Example usage
const receiptId = generateReceiptId();
console.log('Generated Receipt ID:', receiptId);

// export this function
export default generateReceiptId;
