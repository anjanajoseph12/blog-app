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


    
 router.post("/signin",async(req,res)=>
 {
   
    let email=req.body.emailid
    let data=await usersModel.findOne({"email":emailid})
    if(!data)
    {
        return res.json({
            status:"invalid user"


        }
           
        )
        }
    
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
          
        )
    }
    res.json({
        status:"success"
    })



 })
    
    
})
 module.exports=router