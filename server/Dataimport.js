import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import products from "./data/Products.js";
import Product from "./Models/ProductModel.js";

const ImportData = express.Router();

ImportData.post("/user", async(req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
    // res.send("hello world");
});

ImportData.post("/products", async(req, res) => {
    await Product.deleteMany({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
    // res.send("hello world");
});

export default ImportData; 

/////////////////////