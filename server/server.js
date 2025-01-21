require("dotenv").config()
const express=require("express")
const app=express()
const cors = require("cors");
const bodyParser=require('body-parser')
const userrouter=require("./routers/AuthRouter")
const profileRouter=require('./routers/profile')


const DataBase=require('./database/db')
const PORT =process.env.PORT

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use('/auth',userrouter)
app.use("/profile", profileRouter);

//database
DataBase()


app.listen(PORT,()=>{
  console.log(`serever is running at ${PORT}`)

})