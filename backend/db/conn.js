var mongoose=require('mongoose');
const DB='mongodb+srv://aravintharaj:shophub@cluster0.hat7u4t.mongodb.net/shophub?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log('Connected to DB successfully');
}).catch((err)=>{
    console.log('not connected to db');
})
