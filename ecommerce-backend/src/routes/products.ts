import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";


const app = express.Router();

// To Create New Product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// To get All Products with filters - /api/v1/product/latest
app.get("/all", getAllProducts);

// To get last 10 Products - /api/v1/product/latest
app.get("/latest", getLatestProducts);

// To get all unique Categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

// To get all Products - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);

// To get, Update, delete Product
app.route("/:id").get(getSingleProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct);

export default app;