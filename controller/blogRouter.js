const express=require("express")
const usersModel=require("../model/usersModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>
{

    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let blog=new usersModel(data)
    let result= blog.save()
    res.json({
        status:"success"
    })
        }
    )
    //let name=req.body.name
    //let age=req.body.age
    //let mobilenumber=req.body.mobilenumber
    //let address=req.body.address
    //let emailid=req.body.emailid
    //let password=req.body.password


    

    
    
})
 module.exports=router