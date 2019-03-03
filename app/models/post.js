/**
 * Arquivo: app/models/post.js
 * Descrição: arquivo responsável pela classe Modelo: 'Post'
 * Data: 03/03/2019
 * Author: Glaucia Lemos
 */

/**
 *
 * === Classe: Post ===
 *
 * id: guid (gerado pelo próprio MongoDb)
 * titulo: string - campo obrigatório
 * nome: string - campo obrigatório
 * email: string - campo obrigatório
 * conteudo: string - campo obrigatório
 *
 */

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  conteudo: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);
