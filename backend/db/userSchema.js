var mongoose=require('mongoose');
const userScema= new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

const User=mongoose.model('USER',userScema);
module.exports=User;