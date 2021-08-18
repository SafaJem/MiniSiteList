const mongoose=require('mongoose')
const listSchema= new mongoose.Schema({
titre:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('lists',listSchema)