/**
 * Arquivo: src/models/post.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelo modelo: 'Post' para realizar a conexão com a base de dados.
 * Data: 16/02/2019
 * Documentação mongoose: https://mongoosejs.com/
 */

/**
 * Infos inerentes a Classe:
 * ==== Post ====
 * id: number (gerado pelo MongoDb - GUID)
 * titulo: string
 * nome: string
 * email: string
 * conteudo: string
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    titulo: { type: String, require: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    conteudo: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

// Exportando o meu Schema para poder ser usada:
module.exports = mongoose.model('post', PostSchema);
