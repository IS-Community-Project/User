import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Login.css"; // Import the CSS file for styling
import image from "../../assets/img.png"; // Correct import

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    navigate("/Home2"); // Redirect to home page
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1>Gear Up for Success <h1/>
          Welcome to SUSL Sports Equipment Hub!</h1>
      </header>
      <div className="content">
        <div className="image-container">
          <img src={image} alt="Sports Players" className="sports-image" />
        </div>
        <div className="form-container">
          <div className="form-box">
           
            <h1 className="app-title">equipZone</h1>
          
            <p>Login to your account</p>
            <p className="login-link">
            Already logged in? <a href="/Register">Signup</a>
            </p>
            
            <form className="login-form" onSubmit={handleLogin}>
              <div className="label1">

              <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>
              
              <label htmlFor="index-number">Index Number</label>
              </div>
             
              <input
                type="text"
                id="index-number"
                placeholder="Enter your Index Number"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              </div>
              <div className="label2">
              <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>

              <label htmlFor="password">Password</label>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
            

              <div className="options">
                <div>
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
