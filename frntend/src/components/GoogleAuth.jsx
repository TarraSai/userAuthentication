
import {Button} from 'flowbite-react'
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import {app} from './fierbase'
import { ShowSucess } from './Toastify'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function GoogleAuth() {
    const auth = getAuth(app);
    const navigate = useNavigate()
    const handleGoogle = async() => {
        const provider = new GoogleAuthProvider();
        provider.getCustomParameters({prompt: 'select_account'});
        try {
           const responce=await signInWithPopup(auth, provider)
           const userdata=await axios.post('http://localhost:3000/auth/googleAuth',responce.user)
           console.log("userdata ",userdata);
            if(userdata.status===200){
              localStorage.setItem("Token", userdata.data.token);
              ShowSucess(userdata.data.message)
              navigate('/profile')
            }
        } catch (error) {
            console.log(error);
        

    }
}
  return (
   <Button type='button' className='rounded mt-3' gradientDuoTone='pinkToOrange' onClick={handleGoogle}>continue with google</Button>
  )
}
