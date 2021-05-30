import express from "express"
import { addquote, getallquote } from "../controllers/quotes.js"



const router = express.Router();

//pathnames
router.post("/add",addquote);
router.get("/getall",getallquote)

//export to starst.js
export default router