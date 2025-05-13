const Todo=require("../models/todoSchema");

exports.getAllTodos=async (req,res)=> {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

exports.getTodoById=async (req,res)=> {
  try {
    const id=req.params.id;
    const todos = await Todo.findById(id);
    // if id is not found
    if(!todos)
    {
      res.status(404).json({
        success: false,
        message:"Id Not found!"
      });
    }

    //when id is found
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}