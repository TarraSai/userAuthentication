const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  
},{timeStamp:true});
const userdata=mongoose.model("userData",userSchema)
module.exports=userdata