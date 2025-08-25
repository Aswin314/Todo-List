import express from 'express'
import ConnectDB from './Config/ConnectDB.js';
import dotenv from 'dotenv'
import BookRoutes from './Routes/BooksRoutes.js';
import cors from 'cors';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/books', BookRoutes);

const PORT = process.env.PORT || 5000;
ConnectDB()
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
