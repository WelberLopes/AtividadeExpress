import mongoose from "mongoose";
import {tarefa} from "../models/Tarefas.js";
import bcrypt from "bcryptjs"; // Certifique-se de que essa linha está presente
import jwt from "jsonwebtoken"; // Para gerar o token JWT

class TarefasController {
    static async listTarefas(req, res){

        try{
        const tarefaList = await tarefa.find({});
        res.status(200).send(tarefaList);
        } catch (erro) {
            res.status(500)
            .json({message: `${erro.message} - falha ao listar tarefas`});
        }
    }
    static async createTarefa(req, res) {
        try {
          const { titulo, descricao, data } = req.body;
    
          // Validação simples
          if (!titulo || !descricao) {
            return res.status(400).json({ message: "Título e descrição são obrigatórios." });
          }
    
          // Criação da nova tarefa
          const novaTarefa = new tarefa({
            titulo,
            descricao,
            data: data || new Date(), // Usa a data atual se nenhuma for fornecida
          });
    
          await novaTarefa.save();
    
          res.status(201).json({
            message: "Tarefa criada com sucesso!",
            tarefa: novaTarefa,
          });
        } catch (erro) {
          res.status(500).json({
            message: `${erro.message} - Falha ao criar tarefa.`,
          });
        }
      }
      static async deleteTarefa(req, res) {
        const { id } = req.params; // ID fornecido na rota
    
        try {
          // Verifica se o documento existe e remove
          const tarefaRemovida = await tarefa.findByIdAndDelete(id);
    
          if (!tarefaRemovida) {
            return res.status(404).json({ message: "Tarefa não encontrada!" });
          }
    
          res.status(200).json({ 
            message: "Tarefa deletada com sucesso!", 
            tarefa: tarefaRemovida 
          });
        } catch (erro) {
          res.status(500).json({ 
            message: `${erro.message} - Não foi possível deletar a tarefa.` 
          });
        }
      }
    }

export default TarefasController;