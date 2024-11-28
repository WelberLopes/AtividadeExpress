import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true},
    descricao: { type: String, required: true },
    data: { type: Date, required: true }, // Data obrigatória
  },
  
);

// Registrando o modelo
const tarefa = mongoose.model('Tarefa', tarefaSchema);

export { tarefa };