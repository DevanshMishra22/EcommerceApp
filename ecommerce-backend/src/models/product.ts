import mongoose from "mongoose";


const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your Name"],
        },
        photo: {
            type: String,
            required: [true, "Please enter your Photo"],
        },
        price: {
            type: Number,
            required: [true, "Please enter Price"],
        },
        stock: {
            type: Number,
            required: [true, "Please enter Stock"],
        },
        category: {
            type: String,
            required: [true, "Please enter product category"],
            trim: true,
        },

    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model("Product", schema);