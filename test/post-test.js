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

  // ==> Testando a rota: /POST:
  describe('/POST post', () => {
    it('Deve Criar um Novo Post', (done) => {
      const post = {
        titulo: 'Transferência Milionária',
        nome: 'Fulano da Silva',
        email: 'teste_2@gmail.com',
        conteudo: 'Neymar deve fazer exames na quinta em Paris e ser apresentado na sexta.',
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
});
