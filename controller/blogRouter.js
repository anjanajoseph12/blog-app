const express=require("express")
const usersModel=require("../model/usersModel")
const router=express.Router()

router.post("/add",async(req,res)=>
{
    let data=req.body
    let blog=new usersModel(data)
    let result=await blog.save()
    res.json({
        status:"success"
    })
})
 module.exports=router