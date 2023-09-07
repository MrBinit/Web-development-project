import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image: {
        type:String,
        require: true,

    },
    password:{
        type:String,
        require:true,
    },
    price:{
        type: Number,
        require: true,
        default: 0,
    }
},
{
    timestamps: true,
}
);
const Product = mongoose.model("Product", productSchema);
export default Product;