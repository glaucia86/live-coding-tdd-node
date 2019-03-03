/**
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 11/02/2019
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url, { useNewUrlParser: true }).then(() => {
  console.log('Base de dados conectado com Sucesso!');
}).catch((err) => {
  console.log('Não conseguimos conectar com a Base de Dados. Fechando agora...:', err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota default:
app.get('/', (req, res) => {
  res.json({ message: 'Sejam Bem-Vindos(as) a API TDD Node.js com Mocha & Chai - Glaucia Lemos' });
});

// Aqui estaremos fazendo a chamada das Rotas da api 'Post'
require('./app/routes/routes')(app);

app.listen(8000, () => {
  console.log('Aplicação sendo executada na porta 8000');
});

module.exports = app;
