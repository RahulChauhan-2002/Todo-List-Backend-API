const express=require("express");
const router=express.Router();
const todoControlles=require("../controller/todoControllers")

router.post('/send', todoControlles.createTodo);
router.get('/get', todoControlles.getAllTodos);


module.exports=router;