/**
 * Arquivo: app/routes/routes.js
 * Descrição: Arquivo responsável pela definição das rotas da api
 * Data: 03/03/2019
 * Author: Glaucia Lemos
 */

module.exports = (app) => {
  const posts = require('../controllers/postController');

  // Criar uma nova 'Postagem': POST - http://localhost:8000/posts
  app.post('/posts', posts.create);

  // Selecionar todas as 'Postagens': GET - http://locahost:8000/posts/
  app.get('/posts', posts.findAll);

  // Selecionar 'Postagem' por Id: GET - http://locahost:8000/posts/:id
  app.get('/posts/:id', posts.findOne);

  // Atualizar 'Postagem' por Id: PUT - http://locahost:8000/posts/:id
  app.put('/posts/:id', posts.updateOne);

  // Excluir 'Postagem' por Id: PUT - http://locahost:8000/posts/:id
  app.delete('/posts/:id', posts.deleteOne);
};
