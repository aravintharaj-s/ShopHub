var express=require('express');
var router=express.Router();
require('../db/conn');
const User=require('../db/userSchema');

router.get('/index/manoj',(req,res)=>{
    res.send('hii manoj');
})
router.get('/register',(req,res)=>{
    res.send('hello from register');
});                                               
router.get('/login',(req,res)=>{
    res.send('hello from login');
});                                       
router.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body
        if(!email){
            res.status(200).json({success: false,error:"Please enter username!!"})
        }else if(!password){
            res.status(200).json({success: false,error:"Please enter password!!"})
        }

        const userLogin = await User.findOne({email:email})
        console.log(userLogin);
        if(!userLogin){
            res.status(400).json({success: false,error:"User not registered"})
        }else{
            if(password!=userLogin.password)
            {
                res.status(400).json({success: false,error:"Wrong password.Re-enter password"});
            }else{
                console.log(`${userLogin.user} successfully logged in`);
                res.status(200).json({success: true,message:`Welcome ${userLogin.user}`})
            }
        }
    }
    catch(err){
        console.log(err)
    }
});

router.post('/register',(req,res)=>{
    const {user,email,password,confirmpassword}=req.body;
    if(!user||!email||!password||!confirmpassword)
    {
        return res.status(422).json({success: false,error:'Please fill all the fields correctly'});
    }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist)
        {
            return res.status(422).json({success: false,error:'User already exist'});
        }

        const user1= new User({user,email,password,confirmpassword});

        user1.save().then(()=>{
            if(user1.password==user1.confirmpassword){
                res.status(201).json({success: true,message:'User Saved Successfully'});
            }else{
                 res.status(422).json({success: false,error:'Password does not match with confirm password'});
            }
            
        }).catch((err)=>res.status(500).json({success: false,error:'Failed to register'}));
    }).catch((err)=>console.log(err))
});




module.exports=router;