import express, { Router } from "express";
import alunoController from "../controllers/alunoController.js"
import tarefaController from "../controllers/tarefaController.js";

const alunoRoutes = (app) => {
    // Certifique-se de que o alunoController tem métodos definidos corretamente
    app.get("/alunos", alunoController.listAlunos);  // O controlador precisa de métodos
    app.post("/alunos", alunoController.createAlunos);  // O controlador precisa de métodos
    app.post("/login", alunoController.login);  // O controlador precisa de métodos
    app.get("/tarefas", tarefaController.listTarefas);
    app.post("/tarefas", tarefaController.createTarefa);
    app.delete("/tarefas/:id", tarefaController.deleteTarefa);


   
  };
  
  export default alunoRoutes;