/**
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 11/02/2019
 */

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const configDb = require('./src/config/database');

// Aqui a gente faz a chamada da 'url' da conexão da base de dados da nossa aplicação:
mongoose.connect(configDb.local.localUrl, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

// ROTA DEFAULT: http://localhost:8000/v1
app.get('/v1', (req, res) => res.json({ message: 'Sejam Bem-Vindos(as) a API: Live Coding - Glaucia Lemos!' }));

app.listen(port);
console.log(`Aplicação executando na porta...: ${port}`);

module.exports = app;
