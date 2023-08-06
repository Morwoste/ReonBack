const express = require('express');
const { 
    createTable, 
    createList, 
    showTodos, 
    searchTodo, 
    updateTodo,
    checkTodo,
    deleteTodo 
} = require('../controllers/todosController');
const router = express.Router();

router.get('/create/table', createTable);
router.post('/create/list', createList);
router.get('/show/todos', showTodos);
router.post('/search', searchTodo);
router.put('/update', updateTodo);
router.put('/check', checkTodo);
router.delete('/delete', deleteTodo);

module.exports = router;