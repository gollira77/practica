import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {connectDB} from './src/config/db.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

connectDB();

app.get('/', (req, res) => {
    res.status(200).json({message: 'la api esta corriendo'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});