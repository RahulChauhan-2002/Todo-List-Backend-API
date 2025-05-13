const Todo=require("../models/todoSchema");

exports.createTodo=async (req,res)=>{
    try {
        const todo= await Todo.create({
            title:req.body.title,
            description:req.body.description,
            createdOn:req.body.createdOn
        });

        res.status(201).json({
            success:true,
            data:todo
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
        
    }
} 

exports.getAllTodos=async (req,res)=> {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}