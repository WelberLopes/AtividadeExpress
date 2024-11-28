import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema(
  {   
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    birthDate: { type: Date }, // Data de nascimento obrigatória  
  },
);
const aluno = mongoose.model("alunos", alunoSchema);

export {aluno, alunoSchema}