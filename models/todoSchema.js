const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("Todo",TodoSchema);