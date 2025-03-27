const mongoose=require('mongoose')
const Todolistmodelschema =new mongoose.Schema(
    {
       title: String,created:{type:Date,default:Date.now}
    }
)
module.exports=mongoose.model('List',Todolistmodelschema)



