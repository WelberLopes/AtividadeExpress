import mongoose from "mongoose";
import {aluno} from "../models/Aluno.js";
import bcrypt from "bcryptjs"; // Certifique-se de que essa linha está presente
import jwt from "jsonwebtoken"; // Para gerar o token JWT


class AlunoController {
    static async listAlunos(req, res){

        try{
        const alunoList = await aluno.find({});
        res.status(200).send(alunoList);
        } catch (erro) {
            res.status(500)
            .json({message: `${erro.message} - falha ao listar alunos`});
        }
    }
    static async createAlunos(req, res){

        try{
       const newAluno = await aluno.create(req.body);
       res.status(201)
       .json({message: "Aluno criado com sucesso", aluno: newAluno})
        } catch (erro) {
            res.status(500)
            .json({message: `${erro.message} - falha ao criar aluno`});
        }
    }
    static async createAlunos(req, res) {
        try {
          const newAluno = await aluno.create(req.body);
          res.status(201).json({ message: "Aluno criado com sucesso", aluno: newAluno });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao criar aluno` });
        }
      }
    
      // Login de um aluno
      static async login(req, res) {
        const { email, password } = req.body;
    
        try {
          // Buscar o aluno pelo email
          const alunoEncontrado = await aluno.findOne({ email });
    
          if (!alunoEncontrado) {
            return res.status(404).json({ message: "Aluno não encontrado" });
          }

          const senhaValida = true;
    
          if(password != alunoEncontrado.password) {
            senhaValida = false 
          }
          //const senhaValida = await bcrypt.compare(password, alunoEncontrado.password);
    
          if (!senhaValida) {
            console.log("senha incorreta");
            return res.status(401).json({ message: "Senha incorreta" });
          }
          console.log("senha correta");

    
          // Gerar um token JWT (se a senha for válida)
          const token = jwt.sign({ id: alunoEncontrado._id, email: alunoEncontrado.email }, "segredo", { expiresIn: "1h" });
    
          // Retornar a resposta com o token
          res.status(200).json({ message: "Login bem-sucedido", token });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao realizar login` });
        }
      }
}

export default AlunoController;