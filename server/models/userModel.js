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
  photo:{
    type:String,
    default:"https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
  }
  
},{timeStamp:true});
const userdata=mongoose.model("userData",userSchema)
module.exports=userdata