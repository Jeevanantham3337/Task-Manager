const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength:[20,"not more than 20"],
    },
    completed:
    {
        type:Boolean,
        default:false,
    }
        
})
const task=mongoose.model("task",taskSchema)
module.exports=task