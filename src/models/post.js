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
