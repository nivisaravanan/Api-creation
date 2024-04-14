var express=require('express');
const app=express();
var bodyParser=require('body-parser');
const {error}=require('console');
const createError=require('http-error');
const path=require('path');
const {default:mongoose}=require('mongoose');
// mongoose=require('mongoose');
const cors=require('cors');
dbConfig =require('./db/databasename');
mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
})
.then( ()=>{
    console.log("database connected")
},
error=>{
    console.log("db not connected")
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
const studentRoutes = require('./routes/student.routes');

app.use('/endpoint',studentRoutes);
const Port=process.env.PORT || 8080;
const server=app.listen(Port, ()=>{
    console.log("port connected" +Port)
})
app.get('/',(req,res)=>{
    res.send('invalid enter point')
})
// app.use(function(req,res,next){
//     next(createError(404))
// });
// app.use(function(err,req,res,next){
//     if(!err.statusCode)
//     err.statusCode=500;
//      res.statusCode(err.statusCode).send(err.message)
// })
