require('dotenv').config() //importando o arquivo .dotenv
const path = require('path'); //path utilizado para trabalhar com diretórios, é padrão do node

const routes = require('./routes') //importando as rotas do arquivo routes

const { globalMiddleware } = require('./src/middlewares/middleware')

/* express */
const express = require('express'); //express instalado com node
const app = express(); //'instanciando' o express para a const app

/* mongoose */
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING) //conexão com o banco de dados utilizando variáveis de ambiente no arquivo dotenv
/* mongoose.connect() retorna um promise que será resolvida no código abaixo */
  .then(() => {
    app.emit('pronto') //enviando um 'sinal' em caso de sucesso da conexão
    console.log('base de dados funconando')
}).catch(function (err) { //capturando o erro
  console.log('falha ao conectar a base de dados')
  console.log(err.message)
})

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

app.use(express.urlencoded({ extended: true})) // aceitando dados enviados pelo formulário no body(req.body)
app.use(express.static(path.resolve(__dirname, 'public'))) //dizendo ao express que o caminho dos arquivos estáticos é na pasta public

const sessionOptions = session({
  secret: 'secret cat',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views', 'pages')) /* dizendo ao express que o caminho das views
do projeto é sse */

app.set('view engine', 'ejs') /* ejs como view engine do projeto */

app.use(globalMiddleware); //utilizando middlewares em todas as rotas
app.use(routes) //utilizando as rotas

app.on('pronto', () => {
  app.listen(8080, () => { //dizendo para o express 'ouvir' na porta 8080
    console.log('Access: http://localhost:8080')
  })  
})