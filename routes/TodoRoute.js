const express=require("express");
const router=express.Router();
const getTodos=require("../controller/getTodos")
const addTodo=require("../controller/addTodo")
const updateTodo=require("../controller/updateTodo")
const deleteTodo=require("../controller/deleteTodo")

router.post('/send', addTodo.createTodo);
router.get('/get', getTodos.getAllTodos);
router.get('/get/:id', getTodos.getTodoById);
router.put('/update/:id',updateTodo.update);
router.delete('/delete/:id',deleteTodo.delete);


module.exports=router;