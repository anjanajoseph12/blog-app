const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRouter=require("./controller/blogRouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://anjanajosephpassion:geditanjana.py@cluster0.a5ryr4o.mongodb.net/blogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)
app.use("/api/blog",blogRouter)

app.listen(3001,()=>{
    console.log("server running");
})