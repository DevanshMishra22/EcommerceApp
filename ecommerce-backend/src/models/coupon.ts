import mongoose from "mongoose";


const schema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, "Please Enter The Coupon Code"],
        unique: true,
    },
    amount: {
        type: Number,
        required: [true, "Please Enter The Discount Amount"],
    },
});


export const Coupon = mongoose.model("Coupon", schema)