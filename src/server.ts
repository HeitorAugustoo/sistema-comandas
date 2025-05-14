import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API do sistema de comandas está no arr!");
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`);
})