/**
 * Arquivo: app/controllers/postControllers.js
 * Descrição: arquivo responsável pela lógica dos verbos HTTP do 'Post'
 * Data: 03/03/2019
 * Author: Glaucia Lemos
 */

const Post = require('../models/post');

// Método responsável por Criar uma nova 'Postagem': POST - http://localhost:8000/posts
exports.create = (req, res) => {
  if (!req.body.titulo && !req.body.nome && !req.body.email && !req.body.conteudo) {
    return res.status(400).send({ message: 'O Post não pode estar vazio!' });
  }

  // Criar uma nova 'Postagem':
  const post = new Post({
    titulo: req.body.titulo,
    nome: req.body.nome,
    email: req.body.email,
    conteudo: req.body.conteudo,
  });

  // Salvar os dados na base de dados:
  post.save()
    .then((data) => {
      res.status(200).send({ message: 'Post Criado com Sucesso', data });
    }).catch((err) => {
      res.status(500).send({ message: err.message || 'Ocorreu um erro ao tentar ao tentar criar um Post' });
    });
};
