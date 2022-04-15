const express = require('express'); //express instalado com node
const app = express(); //'instanciando' o express para a const app
const routes = require('./routes') //importando as rotas do arquivo routes

app.use(express.urlencoded({ extended: true})) // aceitando dados enviados pelo formulário no body(req.body)

app.use(routes) //utilizando as rotas

app.listen(8080, () => { //dizendo para o express 'ouvir' na porta 8080
  console.log('Access: http://localhost:8080')
})