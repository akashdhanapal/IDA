const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true,
        unique:true
    }
})
const Usermodel=mongoose.model("user",Userschema)
module.exports=Usermodel