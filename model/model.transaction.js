import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    aadhar:{
        type : String,
    },
    mobile:{type:String,required:true},
    otp: { type: String},
    
},
{
    timestamps: true,
});


const OTP = mongoose.model('TransactionHistory', TransactionSchema);

export default OTP;

