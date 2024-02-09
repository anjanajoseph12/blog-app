const mongoose = require("mongoose")

const blogSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobilenumber:String,
        address:String,
        emailid:String,
        password:String
    }
)
module.exports=mongoose.model("blog",blogSchema)