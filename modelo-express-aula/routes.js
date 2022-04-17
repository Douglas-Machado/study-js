const express = require('express');
const route = express.Router(); //router do express
const homeController = require('./src/controllers/homeController') //importando homeController
const contactController = require('./src/controllers/contactController')

route.get('/', homeController.homePage) //dizendo que o index da página ou '/' é a rota do homeController
route.post('/', homeController.getPost)

route.get('/contact', contactController.homePage)

module.exports = route //exportando a rota para ser usada no server.js 