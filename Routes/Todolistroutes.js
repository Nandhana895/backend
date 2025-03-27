const mongoose=require('mongoose')
const express=require('express');
const Tolisitmodel=require('../Model/Todolistmodel')
const router=express.Router()
router.post('/get',async(req,res)=>{
    const data=new Tolisitmodel(req.body)
     await data.save()
   return res.status(200).json({result:true})
   
})