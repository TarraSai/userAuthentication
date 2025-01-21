const jwt=require('jsonwebtoken')
require('dotenv').config()
const TokenGenarate=(userData)=>{
    const playload={
        _id:userData._id,
        email:userData.email,
        name:userData.name
    }
    console.log(playload)
    return jwt.sign(playload, process.env.My_code,{expiresIn:'24h'} );
}
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const secretKey = process.env.My_code;
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next(); 
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Invalid token" });
  }
};



module.exports = {
  TokenGenarate,
  verifyToken,
};