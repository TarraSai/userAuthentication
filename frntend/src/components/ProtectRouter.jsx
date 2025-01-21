/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

function ProtectRouter({children}) {
 
  const token=localStorage.getItem("Token")
  return token?children:<Navigate to='/login'/>
  
}

export default ProtectRouter