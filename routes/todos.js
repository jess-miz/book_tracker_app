const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.get('/updateModal/:id', todosController.updateModal)

router.post('/createTodo', todosController.createTodo)

router.post('/updateData', todosController.updateData)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router