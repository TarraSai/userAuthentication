
import './App.css'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import NoPage from './components/NoPage';
import ProtectRouter from './components/ProtectRouter';
import Profile from './components/Profile';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      
<Route path='/' element={<Login/>}/>
<Route path='login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/profile' element={<ProtectRouter><Profile/></ProtectRouter>}/>
<Route path="*" element={<NoPage />} />


     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
