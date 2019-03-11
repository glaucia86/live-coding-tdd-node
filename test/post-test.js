/**
 * Arquivo: test/post-test.js
 * Descrição: arquivo responsável por realizar os testes da aplicação
 * Data: 03/03/2019
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server').defaultConfiguration;
const should = chai.should();

const Post = require('../app/models/post');

chai.use(chaiHttp);

// Bloco de Código responsável por realizar os testes da api:
describe('Posts', () => {
  beforeEach((done) => {
    // Aqui estará 'limpando' a base de dados sempre quando formos executar os testes.
    Post.deleteOne({}, (err) => {
      done();
    });
  });

  // ==> Testando a rota: /POST
  describe('/POST post', () => {
    it('Deve Criar um Novo Post', (done) => {
      const post = {
        titulo: 'Thiago Neves fora da Libertadores',
        nome: 'Fulano de Souza',
        email: 'teste_3@gmail.com',
        conteudo: 'Thiago Neves se vê fora de partida do Cruzeiro pela Libertadores na quarta: "Não estou pronto".',
      };

      chai.request('http://localhost:8000')
        .post('/posts')
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  // ==> Testando a rota: /GET
  describe('/GET post', () => {
    it('Deve Selecionar todos os "Posts"', (done) => {
      chai.request('http://localhost:8000')
        .get('/posts')
        .end((err, res) => {
          // Se a rota estiver selecionando todos os "Posts", então deverá retornar o status 200:
          res.should.have.status(200);

          // Se o retorno for 200/OK, devo retornar um array com todos os "Posts" criados (contidos na base de dados)
          res.body.should.be.a('array');

          done();
        });
    });
  });

  // ==> Testando a rota: /GET/:id
  describe('/GET post', () => {
    it('Deve Retornar um "Post dado um determinado "Id"', (done) => {
      const post = new Post({
        titulo: 'Transferência Milionária',
        nome: 'Fulano da Silva',
        email: 'teste_2@gmail.com',
        conteudo: 'Neymar deve fazer exames na quinta em Paris e ser apresentado na sexta.',
      });

      post.save((err, post) => {
        chai.request('http://localhost:8000')
          .get(`/posts/${post.id}`)
          .send(post)
          .end((err, res) => {
            res.should.be.a('object');
            res.body.should.have.property('titulo');
            res.body.should.have.property('nome');
            res.body.should.have.property('email');
            res.body.should.have.property('conteudo');
            res.body.should.have.property('_id').eql(post.id);

            done();
          });
      });
    });
  });

  // ==> Testando a rota: /PUT/:id
  describe('/PUT/:id post', () => {
    it('Deve Atualizar um "Post" dado um determinando "Id"', (done) => {
      const post = new Post({
        titulo: 'Transferência Milionária',
        nome: 'Fulano da Silva', // vou alterar esse campo aqui
        email: 'teste@gmail.com',
        conteudo: 'Neymar deve fazer exames na quinta em Paris e ser apresentado na sexta',
      });

      post.save((err, post) => {
        chai.request('http://localhost:8000')
          .put(`/posts/${post.id}`)
          .send({
            titulo: 'Transferência Milionária',
            nome: 'Glaucia Lemos', // alterando esse campo aqui!!!!
            email: 'teste@gmail.com',
            conteudo: 'Neymar deve fazer exames na quinta em Paris e ser apresentado na sexta',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.post.should.have.property('nome').eql('Glaucia Lemos');

            done();
          });
      });
    });
  });

  // ==> Testando a rota /DELETE/:id
  describe('/DELETE/:id', () => {
    it('Deve Excluir um "Post" dado um determinado "Id"', (done) => {
      const post = new Post({
        titulo: 'Transferência Milionária',
        nome: 'Fulano da Silva',
        email: 'teste@gmail.com',
        conteudo: 'Neymar deve fazer exames na quinta em Paris e ser apresentado na sexta',
      });

      post.save((err, post) => {
        chai.request('http://localhost:8000')
          .delete(`/posts/${post.id}`)
          .end((error, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Post Excluído com Sucesso!');

            done();
          });
      });
    });
  });
});
