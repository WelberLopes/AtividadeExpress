import express from "express";
import tarefaController from "../controllers/tarefaController.js"

const tarefasRoutes = (app) => {
    // Certifique-se de que o alunoController tem métodos definidos corretamente
    app.get("/tarefas", tarefaController.listTarefas);  // O controlador precisa de métodos
    //app.post("/alunos", alunoController.createAlunos);  // O controlador precisa de métodos
    //app.post("/login", alunoController.login);  // O controlador precisa de métodos


   
  };
  
  export default tarefasRoutes;