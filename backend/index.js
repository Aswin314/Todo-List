import express from 'express'
import ConnectDB from './Config/ConnectDB.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "List of todos" });
});

const PORT = process.env.PORT || 5000;
ConnectDB()
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
