import express from "express";
// import products from "./data/Products.js";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";


dotenv.config();
connectDatabase();
const app = express();



// app.get("/api/products", (req, res) => {
//     res.json(products)
// });


//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

//Error Handler
app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//     res.send("WelcomeAPI is running...... Hello These is Binit");
// });
const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
