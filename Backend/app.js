import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoutes.js';


const app = express();

dotenv.config({path: "./config/config.env"});

app.use(
    cors({
        origin:[
            process.env.FRONTEND_URL,
            "http://localhost:5173",                   
            "https://cafe-website-9iu6.vercel.app/" 
        ],
        methods: ["POST"],
        credentials: true,  
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

app.use('/api/v1/reservation',reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;