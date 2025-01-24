import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import "../components/css/Profile.css"; // Update your CSS file for better styling

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      navigate("/login");
    } else {
      try {
        const tokendata = jwtDecode(token);
        console.log("Token data:", tokendata);
        setUserData(tokendata);
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("Token");
        navigate("/login");
      }
    }
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={userData.photo|| "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"}
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <h1 className="profile-title">Welcome, {userData.name || "User"}!</h1>
        </div>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {userData.name || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {userData.email || "N/A"}
          </p>
          <p>
            <strong>Role:</strong> {userData.role || "User"}
          </p>
        </div>
        <button className="logout-button" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
