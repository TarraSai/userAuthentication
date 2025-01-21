const mongoose=require("mongoose")

 const DataBase=()=>mongoose
  .connect(
    "mongodb+srv://1919saitarra:1919saitarra@cluster0.pcje0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
   
  )
  .then(() => {
    console.log("Database is connected successfully.");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the application on database connection failure
  });
module.exports=DataBase