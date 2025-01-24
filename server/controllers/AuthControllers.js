const userdata=require('../models/userModel');
const bcrypt = require("bcrypt");
const {TokenGenarate}=require('../middleware/TonkenGenarate')
const {
  RegisterValidationSchema,
  LoginValidationSchema,
} = require("../middleware/validation");

const register=async(req,res)=>{
    const {name ,email,password}=req.body
    const { error } = RegisterValidationSchema.validate({
      name,
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    try{
        const userExisting=await userdata.findOne({email})
        if(userExisting){
            return res.status(409).json({ message: "Email already in use" });
        }
        const hashpassword=await bcrypt.hash(password,10)
        const newuser = new userdata({
          name,
          email,
          password:hashpassword
          
        });
        await newuser.save()
      res
        .status(201)
        .json({ message: "User registered successfully", user: newuser });

    }catch(error){
console.error(error);
res.status(500).json({ error: "Server error" });
    }
}



const login = async(req, res) => {
  const { email, password } = req.body;
  console.log(email,password)
   const { error } = LoginValidationSchema.validate({
     email,
     password,
   });
    if (error) {
      
      return res.status(400).json({ message: error.details[0].message });
    }

  try {
const userEisting=await userdata.findOne({email})
if(!userEisting){
    return res.status(409).json({ message: "user not found" });
}
const passwordCompare=await bcrypt.compare(password,userEisting.password)
if(!passwordCompare){
    return res.status(400).json({ message: "password not match" });
}
const token = TokenGenarate(userEisting)

 res.status(200).json({ message: "Login successful",token:token });
}

   catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
const googleAuth = async (req, res) => {
  const {email,displayName,photoURL}=req.body
  console.log(photoURL)

  try {
    const userExisting = await userdata.findOne({ email });
    if (userExisting) {
      
      const token = TokenGenarate(userExisting);
    
     return res.status(200).json({ message: "Login successful", token: token });
    }
    const hashpassword=await bcrypt.hash(email,10)
    const newuser = new userdata({
      name: displayName.toLowerCase().replace(" ", "")+Math.floor(Math.random()*1000),
      email,
      password: hashpassword,
      photo:photoURL,
    });
    
    await newuser.save();
    const token = TokenGenarate(newuser);
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports={
    register,login,googleAuth
}
