
const express=require('express')

const app=express()
const tasks=require('./routes/tasks')

const db=require('./db/connect')

require('dotenv').config();
// middleware
// console.log(tasks)
app.use(express.static("./public"))
app.use(express.json())
app.use('/api/v1/tasks',tasks)

const start=async()=>
{
    try{
        await db(process.env.MONGO_URI)
        const port=3000
        app.listen(port)
    }
    catch(error){
        console.log(error)
    }
}

start()

