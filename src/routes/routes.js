/**
 * Arquivo: src/routes/routes.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelas rotas da aplicação - rotas: 'Post'.
 * Data: 18/02/2019
 */

const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');

// GET: http://localhost:8000/v1/posts/
router.get('/posts/', posts.findAll);

// GET: http://localhost:8000/v1/posts/:id
router.get('/posts/:id', posts.findOne);

// POST: http://localhost:8000/v1/posts
router.post('/posts', posts.createOne);

// PUT: http://localhost:8000/v1/posts/:id
router.put('/posts/:id', posts.updateOne);

// DELETE: http://localhost:8000/v1/posts/:id
router.delete('/posts/:id', posts.deleteOne);
