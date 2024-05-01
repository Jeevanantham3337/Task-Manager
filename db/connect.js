const mongoose=require('mongoose')

// const conString="";


const connectDb=(url)=>
{
    // console.log(url)
    mongoose
    .connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
}

module.exports=connectDb

