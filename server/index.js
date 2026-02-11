import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chat from "./routes/chat.js";

dotenv.config();
const app=express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://prototyoe.vercel.app',
    'https://prototyoe-f0pzlrykf-shubh-guptas-projects-06a65288.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use("/chat",chat);

app.listen(2000,()=>console.log("Server running"));
