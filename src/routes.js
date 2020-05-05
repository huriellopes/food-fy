const express = require('express')
const routes = express.Router()

// Controllers
const HomeController = require('./app/controllers/HomeController')
const ReceitasController = require('./app/controllers/ReceitasController')
const SobreController = require('./app/controllers/SobreController')

routes.get('/test', (_req, res) => res.send('FoodFy is working!'))
routes.get('/', HomeController.index)
routes.get('/sobre', SobreController.index)
routes.get('/receitas', ReceitasController.index)

module.exports = routes