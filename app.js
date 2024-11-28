import express from "express";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/alunoRoutes.js";
import routesq from "./routes/tarefasRoutes.js";



import cors from 'cors';  


const app = express();
app.use(cors()); 

app.use(express.json());

const connection = await connectDb();
connection.on("error", (erro) => {
    console.log("Erro ao se conectar com o banco de dados! - ", erro);
  });

connection.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!");
  });

routes(app);

app.get("/", (req, res) => {
  res.status(200).send("API funcionando corretamente!");
});

export default app;