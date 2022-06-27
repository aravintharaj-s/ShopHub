var express=require('express');
require('./db/conn');
var app=express();
app.use(express.json());
app.use(require('./routes/auth'));
var path=require('path');

const PORT= 5502;


app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
});