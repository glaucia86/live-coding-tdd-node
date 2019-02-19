
/**
 * Arquivo: src/controllers/posts.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por tratar a lógica das rotas da api 'Post'
 * Data: 18/02/2019
 */

const _ = require('lodash');
const Post = require('../models/post');

// Método: Criar um novo 'Post': POST: http://localhost:8000/v1/posts
function createPost(req, res) {
  const newPost = new Post(req.body);

  newPost.save((error, post) => {
    if (error) {
      res.status(400).json({ error: 'Error!' }, error);
    } else {
      res.status(200).json({ message: 'Post Adicionado com Sucesso!' }, post);
    }
  });
}

// Método: Selecionar Todos os 'Posts': GET: http://localhost:8000/v1/posts/
function findAll(req, res) {
  const query = Post.find({});

  query.exec((error, posts) => {
    if (error) {
      res.status(400).json(error);
    }

    res.status(200).json(posts);
  });
}

// Metódo: Selecionar Post por Id: GET: http://localhost:8000/v1/posts/:id
function findOne(req, res) {
  Post.findById(req.params.id, (error, post) => {
    if (error) {
      res.status(400).json(error);
    }

    res.status(200).json(post);
  });
}

// Metódo: Atualizar 'Post' por Id: PUT: http://localhost:8000/v1/posts/:id
function updateOne(req, res) {
  Post.findById(req.params.id, (err) => {
    if (err) {
      res.status(400).json(err);
    }

    Object.assign(post, req.body).save((error, post) => {
      if (error) {
        res.status(400).json(error);
      }

      res.status(200).json({ message: 'Post Atualizado com Sucesso', post });
    });
  });
}

// Metódo: Excluir 'Post' por Id: DELETE: http://localhost:8000/v1/posts/:id
function deleteOne(req, res) {
  Post.remove({ _id: req.params.id }, (error, result) => {
    if (error) {
      res.status(400).json(error);
    }

    res.status(200).json({ message: 'Post Excluído com Sucesso!' });
  });
}

module.exports = {
  findAll,
  findOne,
  createPost,
  updateOne,
  deleteOne,
};
