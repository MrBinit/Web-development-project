import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    Image: {
        type:String,
        require: true,

    },
    // password:{
    //     type:String,
    //     require:true,
    // },
    price:{
        type: Number,
        require: true,
        default: 0,
    },
    category:{
        type:String,
        require:true
    },
},
{
    timestamps: true,
}
);
const Product = mongoose.model("Product", productSchema);
export default Product;