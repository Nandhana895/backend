const express=require('express')
const app =express()
app.use(express.json())
const cors=require('cors')
app.use(cors())
const todo=require('./Routes/Todolistroutes')
port=3003
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nandhanasunil2026:Nandhana123@cluster0.tdv63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>
{
    console.log("connected to database")  
})
app.use(todo)
app.listen(port)



 


