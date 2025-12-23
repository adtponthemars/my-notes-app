import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();
connectDB();
const app = express();
app.use(cors());
//middleware
app.use(express.json());

app.use("/api/notes", notesRouter);

app.listen(5001, ()=>{
    console.log("Serve running PORT: 5001");
})
