const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let studentSchema=new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},
    {
        collection:'student'
    });
module.exports=mongoose.model('studetschema',studentSchema)