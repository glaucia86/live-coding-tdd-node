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

// Método responsável por selecionar todos os 'Posts da Base de Dados: GET - http://locahost:8000/posts/
exports.findAll = (req, res) => {
  Post.find().then((posts) => {
    res.status(200).send(posts);
  }).catch((err) => {
    res.status(500).send({ message: err.message || 'Ocorreu um erro ao tentar selecionar todos os Posts' });
  });
};

// Método responsável por selecionar um determinado 'Post' por Id: GET - http://locahost:8000/posts/:id
exports.findOne = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(400).send({ messagem: `Post não encontrado com o Id...: ${req.params.id}` });
      }
      res.status(200).send(post);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ messagem: `Post não encontrado com o Id...: ${req.params.id}` });
      }
      return res.status(500).send({ message: err.message || `Error ao retornar o Post do Id...: ${req.params.id}` });
    });
};

// Método responsável por atualizar um determinado 'Post' por Id: PUT - http://locahost:8000/posts/:id
exports.updateOne = (req, res) => {
  if (!req.body.titulo && !req.body.nome && !req.body.email && !req.body.conteudo) {
    return res.status(400).send({ message: 'O Post não pode estar vazio' });
  }

  // Depois de encontrar um determinado 'ID' , então posso realizar a atualização do 'body'
  Post.findOneAndUpdate(req.params.id, {
    titulo: req.body.titulo,
    nome: req.body.nome,
    email: req.body.email,
    conteudo: req.body.conteudo,
  }, { new: true })
    .then((post) => {
      if (!post) {
        return res.status(400).send({ message: `Não encontrado o Id do Post...: ${req.params.id}` });
      }
      res.status(200).send({ message: 'Post Atualizado com Sucesso', post });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: err.message || `Não encontramos o Id do Post...: ${req.params.id}` });
      }

      return res.status(500).send({ message: `Erro ao atualizar o Post com Id...:${req.params.id}` });
    });
};

// Método responsável por excluir um determinado 'Post' por Id: DELETE - http://locahost:8000/posts/:id
exports.deleteOne = (req, res) => {
  Post.findOneAndDelete(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(400).send({ message: `Não encontramos o Id do Post...: ${req.params.id}` });
      }

      res.status(200).send({ message: 'Post Excluído com Sucesso!' });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `Não encontramos o Id do Post...: ${req.params.id}` });
      }

      return res.stsatus(500).send({ message: err.message || `Não conseguimos excluir o id do Post...: ${req.params.id}` });
    });
};
