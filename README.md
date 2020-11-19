# Live Coding Twitch.tv: API RestFul TDD Node.js com Mocha & Chai 

[![Evento-Twitch-Glaucia-Lemos.jpg](https://i.postimg.cc/t4jZGk9D/Evento-Twitch-Glaucia-Lemos.jpg)](https://postimg.cc/crF4QQg8)

## Recursos Utilizados no Desenvolvimento da Aplicação: 🚀

- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-gllemos)**
- **[Node.js](https://nodejs.org/en/) ~ v.10**
- Pacotes:
    - **[Mochajs](https://mochajs.org/)** 
    - **[Chaijs](https://www.chaijs.com/)**
    - **[Eslint](https://eslint.org/)**
- **[Postman](https://www.getpostman.com/)**
- **[MongoDb Compass](https://www.mongodb.com/download-center/compass)**
- **[MongoDb Community Server](https://www.mongodb.com/download-center/community)**
- **[Cadastro no Site Travis-ci.org](https://travis-ci.org/)**

## O que eu vou Aprender?! 📘

Nesse live coding, que será divido em 3 ou 4 partes, estaremos desenvolvendo uma api Back-End RestFul CRUD com Node.js integrado com o MongoDb e com realização de Testes de Unidade usando o Mocha & Chai. E no final de desenvolvermos a aplicação, estaremos fazendo a integração da api no site do Travis para realizarmos o C.I para sabermos se de fato os commits que estamos enviando para o Github estão dentro do padrão e passando no C.I.

## Vídeos da Série:

- [TDD com Node.js Mocha & Chai - Parte I](https://youtu.be/JhXyr-fNHGs)
- [TDD com Node.js Mocha & Chai - Parte II](https://youtu.be/1Cr7l3J4m6g)
- [TDD com Node.js Mocha & Chai - Parte III](https://youtu.be/LwXAFCZq41c)
- [TDD com Node.js Mocha & Chai - Parte IV](https://youtu.be/p2QisBfNXMo)
- [TDD com Node.js Mocha & Chai - Parte V](https://youtu.be/MwVCklHp8C8)

## Executar Localmente o Projeto 🔥

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando... 🌀 

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Instalando as Dependências (via Windows): ❗️

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

## Instalação dos Programas via Linux: 💥

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)
- MongoDb: [AQUI](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

## Padrão das Rotas Criadas: 🌟

Procurando seguir o padrão e design das API's, segue abaixo as URI's das rotas a serem desenvolvidas:

obs.: api de exemplo através do site: https://jsonplaceholder.typicode.com

ROTA                      |     HTTP(Verbo)   |      Descrição                |      Links (via PostMan)                 
-------------------------  | ----------------- | ---------------------         | ---------------------------------------- 
/posts                     |       GET         | Selecionar Todos os Posts     | GET:    http://localhost:8000/posts      
/posts                      |       POST        | Criar um Post                 | POST:   http://localhost:8000/posts
/posts/:post_id             |       GET         | Selecionar Por Id             | GET:    http://localhost:8000/posts/:id
/posts/:post_id/            |       PUT         | Atualizar Por Id              | PUT:    http://localhost:8000/posts/:id   
/posts/:post_id/            |       DELETE      | Excluir Por Id                | DELETE: http://localhost:8000/posts/:id

### Executando a Aplicação 💨

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
nodemon
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.

Agora, abre a página da aplicação em `http://localhost:8000`. E pronto a aplicação será executada de maneira local na sua máquina.   

## Executando os Testes: ⭐️

Basta executar o comando: **(dentro da pasta src)**

```
> npm run test

```

**sempre no formato: x-wwwform-urlencoded**

```
[
    {
        "_id": "59821330eacea81b34c74d64",
        "title": "Flamengo - Campeonato Brasileiro 2017",
        "name": "Glaucia Lemos",
        "email": "glaucia_lemos@yahoo.com.br",
        "body": "Jogador não está nos planos e tem rejeição nos bastidores da Gávea. Rubro-Negro evita descartá-lo de forma oficial neste momento - não quer ir contra opinião da torcida de forma tão enfática"
    },
    {
        "_id": "59821472eacea81b34c74d69",
        "title": "Futebol Internacional - Neymar",
        "name": "Globo Esporte",
        "email": "globoesporte@globo.com",
        "body": "Messi se despede de Neymar com vídeo de retrospectiva: Foi um prazer enorme"
    }
]

```

## Tenho Dúvidas... O que Faço?! 🚩

Caso tenha dúvidas ao código desenvolvido durante o live coding, sinta-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/glaucia86/live-coding-tdd-node/issues)** no repositório com a sua dúvida. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

