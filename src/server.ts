import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./docs/swagger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.send("API do sistema de comandas está no arr!");
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`);
})