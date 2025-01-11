import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    transactionHistory:{
        type : Object,
        required : true
    }
},
{
    timestamps: true,
});


const Transaction = mongoose.model('TransactionHistory', TransactionSchema);

export default Transaction;

