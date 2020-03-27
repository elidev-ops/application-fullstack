const express = require('express')
const Route = express.Router()
const ongsController = require('./controllers/ongsControllers')
const incidentsController = require('./controllers/incidentsControllers')
const profileController = require('./controllers/profileControllers')
const sessionController = require('./controllers/sessionController')

Route.post('/session', sessionController.create)

Route.get('/ongs', ongsController.index)
Route.post('/ongs', ongsController.create)
Route.delete('/ongs/:id', ongsController.delete)

Route.get('/incidents', incidentsController.index)
Route.post('/incidents', incidentsController.create)
Route.delete('/incidents/:id', incidentsController.delete)

Route.get('/profile', profileController.index)

module.exports = Route