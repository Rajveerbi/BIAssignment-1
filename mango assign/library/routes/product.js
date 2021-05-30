import express from "express"
import { addproduct, getallproduct } from "../controllers/product.js"



const router = express.Router();

//pathnames
router.post("/add",addproduct);
router.get("/getall",getallproduct)

//export to starst.js
export default router