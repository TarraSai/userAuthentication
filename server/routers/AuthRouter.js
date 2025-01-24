const express=require("express")
const router=express.Router()
const {register ,login,googleAuth}=require('../controllers/AuthControllers');



router.post("/register",register);
router.post('/login',login)
router.post('/googleAuth',googleAuth)


module.exports=router