
var express=require('express');
require('./db/conn');
var app=express();
app.use(express.json());

// app.get('/',function(req,res){
//     res.set({
//         'Access-control-Allow-Origin':'*'
//     })
//     return res.redirect('')
// })
let cors = require("cors");
app.use(cors());
app.use(require('./routes/auth'));
var path=require('path');

const PORT= 5000;


app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
});