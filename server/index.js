import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chat from "./routes/chat.js";

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

app.use("/chat",chat);

app.listen(2000,()=>console.log("Server running"));
