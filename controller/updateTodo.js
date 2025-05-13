const Todo=require("../models/todoSchema");

exports.update=async (req,res)=>{
    try {
        const id=req.params.id;
        const updatedData=req.body;

        const todo = await Todo.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true } // Return updated document & run validators
        );
        //if id is wrong
        if(!todo)
        {
            res.status(404)
            .json({
                success:false,
                message:"Todo not found "
            });
        }

        //if id found
        res.status(200)
        .json({
            success:true,
            message:"Data Updated Successfully ",
            data:todo
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
        success: false,
        message: error.message
        });
    }
}