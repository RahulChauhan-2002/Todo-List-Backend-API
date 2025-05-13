const Todo=require("../models/todoSchema");

exports.delete=async (req,res)=>{
    try {
        const id=req.params.id;

        await Todo.findByIdAndDelete(id);

        res.status(200)
        .json({
            success:true,
            message:"Data Deleted Successfully "
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
        success: false,
        message: error.message
        });
    }
}