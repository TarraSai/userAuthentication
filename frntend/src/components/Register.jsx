import { useState } from 'react'
import axios from 'axios'
import './css/Register.css'
import { useNavigate } from 'react-router-dom';
import { ShowSucess, ShowError } from './Toastify'
import { ToastContainer } from 'react-toastify';
import GoogleAuth from './GoogleAuth';

function Register() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const HandlerChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = formData;

    try {
      const apifetch = await axios.post('http://localhost:3000/auth/register', formData);
      ShowSucess(apifetch.data.message);
      setTimeout(() => {
        Navigate('/login');
      }, 5000);
    } catch (error) {
      if (!name || !email || !password || !cpassword) {
        ShowError("Please fill in all fields!");
      } else if (error.response) {
        ShowError(error.response.data.message);
      } else {
        ShowError("An unexpected error occurred. Please try again.");
      }
      console.log("Error at register", error);
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <div className="form-title text-center">Register</div>
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <label htmlFor="name" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your username"
              value={formData.name}
              onChange={HandlerChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={HandlerChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={HandlerChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm your password"
              value={formData.cpassword}
              onChange={HandlerChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
          <GoogleAuth/>
         
         
        </form>
        <div className="login-link text-center mt-3">
            Already have an account? <a href="/login">Login here</a>
          </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
