const mongoose =require('mongoose');
const { options } = require('nodemon/lib/config');

const mongoURI="mongodb+srv://shaikbhanu:anigdha@cluster0.4qhmie2.mongodb.net/novafit?retryWrites=true&w=majority";

const connectToMongo=()=>{

    if(mongoose.connect(mongoURI))
    console.log("connected")
    
}




module.exports=connectToMongo