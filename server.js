/**
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 11/02/2019
 */

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
// const configDb = require('./src/config/database');
// const routes = require('./src/routes/routes');

/* mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'Erro ao realizar a conexão com a Base de Dados...: '));

if (configDb.util.getEnv('NODE_ENV') !== 'Test') {
  app.use(morgan('combined'));
} */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.json({ message: 'Sejam Bem-Vindos(as) a API: Live Coding - Glaucia Lemos!' }));

app.listen(port);
console.log(`Aplicação executando na porta...: ${port}`);

module.exports = app;
