import { useState } from 'react'
import axios from 'axios'
import './css/Login.css'
import { useNavigate } from 'react-router-dom';
import { ShowSucess, ShowError } from './Toastify'
import { ToastContainer } from 'react-toastify';
import GoogleAuth from './GoogleAuth';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const apidata = await axios.post("http://localhost:3000/auth/login", formData);
      ShowSucess(apidata.data.message);
      localStorage.setItem("Token", apidata.data.token);
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error) {
      if (!formData.email || !formData.password) {
        ShowError("Please fill in all fields!");
      } else if (error.response) {
        ShowError(error.response.data.message);
      } else {
        ShowError("An unexpected error occurred. Please try again.");
      }
      console.log("Error at login", error);
    }
  };

  return (
    <div className='loginform'>
      <div className="form-container">
        <div className="form-title text-center">Login</div>
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <GoogleAuth/>
          <div className="register-link text-center mt-3">
            Don’t have an account? <a href="/register">Register here</a>
          </div>

        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
