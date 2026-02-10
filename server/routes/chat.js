import express from "express";
import { products } from "../data/products.js";
import { generateAdvice } from "../ai/aiProvider.js";

const router=express.Router();

router.post("/",async(req,res)=>{
 const {message,productId}=req.body;
 const product=products[productId];
 const reply=await generateAdvice(message,product);
 res.json({reply});
});

export default router;
