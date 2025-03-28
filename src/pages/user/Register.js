import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import registrationImage from "../../assets/Signup_S.png"; 
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
            
          
            <h1 className="app-title">equip Zone</h1>
          
          <p style={{ marginTop: "20px" }}>Create new account.</p>
          <p className="login-link" style={{ marginTop: "20px" }}>
          Already a Member?  <a href="/login">Login</a>
          </p>

            <form onSubmit={handleRegister}>

            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left", paddingTop: "1px"}}>
            
            <label htmlFor="index-number">User Name</label>
              <input 
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              </div>


            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" , paddingTop: "1px"}}>
            <label htmlFor="index-number">Student ID</label>
          
              <input 
                type="text"
                placeholder="Enter your Student ID"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                required
              />
              </div>

            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left", paddingTop: "1px"}}>
            <label htmlFor="index-number">Phone number</label>
              <input
                type="tel"
                placeholder="Enter Your Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              </div>

             {/* <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" , paddingTop: "1px"}}>
              <label htmlFor="index-number">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>*/}

              <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", textAlign: "left" , paddingTop: "1px" }}>
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
