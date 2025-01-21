const express=require('express')
const router=express.Router()
const {verifyToken}=require('../middleware/TonkenGenarate')
router.get('/',verifyToken,(req,res)=>{

    res.send({
        message:"user profile",user:req.user
    })
})
module.exports=router