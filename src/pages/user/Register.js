import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import registrationImage from "../../assets/S_New.png"; 
import "./Register.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="content-wrapper">
        {/* Left Image Section */}
        <div className="image-section">
          <img src={registrationImage} alt="Registration" className="register-image" />
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <div className="form-frame">
            <h2 className="system-title">Equip Zone</h2>
            <h1 className="form-heading">Create new account.</h1>
            <p className="login-link">
              Already a Member? <a href="/login">Login</a>
            </p>

            <form onSubmit={handleRegister}>

            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>
            
            <label htmlFor="index-number">User Name</label>
              <input 
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              </div>


            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>
            <label htmlFor="index-number">Student ID</label>
          
              <input 
                type="text"
                placeholder="Enter your Student ID"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                required
              />
              </div>

            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>
            <label htmlFor="index-number">Student ID</label>
              <input
                type="tel"
                placeholder="Enter Your Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>
              <label htmlFor="index-number">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" }}>
              <label htmlFor="index-number">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
