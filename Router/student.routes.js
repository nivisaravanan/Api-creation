const express=require('express');
const app=express();
const studentExpressRoute=express.Router();
let studentSchema=require('../model/student.model');
  //  find all
  studentExpressRoute.route('/').get( (req,res)=>{
    studentSchema.find( (error,data)=>{
        if (error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
  })
 // Insert
 studentExpressRoute.route('/add-student').post( (req,res,next)=>{
    studentSchema.create( req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
 })
//  to view particular id
studentExpressRoute.route('/student/:id').get((req,res)=>{
    studentSchema.findById(req.params.id,(error,data)=>{
        if (error){
            return(error)
        }
        else{
            res.json(data)
        }
    })
})
// update
studentExpressRoute.route('/update/:id').put((req,res)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>{
        if (error){
            return(error)
        }
        else{
            res.json(data);
            console.log("updated sucessfully")
        }
    })
})
// delete
studentExpressRoute.route('/del-student/:id').delete((req,res)=>{
    studentSchema.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return(error)
        }
        else{
            res.status(200).json({
                msg:data
            })
        }
    })
})
 module.exports=studentExpressRoute
