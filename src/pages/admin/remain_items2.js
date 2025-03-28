import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "./remain_items2.css";
import runnerup from "../../assets/runnerup.png"; // Adjusted path

const RemainItems2 = () => {
  const location = useLocation(); // Get the location object
  const { item } = location.state || {}; // Extract the item from the state, or default to an empty object
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // You can perform any validation or form handling here

    // Navigate to the next page (RemainItems3)
    navigate("/remain_items1_user");
  };

  return (
    <div className="reserve-container">
      {/* Card Container */}
      <div className="card">
        <div className="content-container">
          {/* Form Section */}
          <div className="form-section">
            <form className="equipment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                
              
    <h1>equip Zone</h1>
    <p>Reserve A Equipment</p>


                <label htmlFor="name">Initials with Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your initials with name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="university-id">University ID</label>
                <input
                  type="text"
                  id="university-id"
                  placeholder="Enter your university ID"
                />
              </div>

              <div className="form-group">
                <label htmlFor="faculty">Faculty</label>
                <input type="text" id="faculty" placeholder="Enter your faculty" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>

              <button type="submit" className="save-btn">
                Save
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <img
              src={runnerup}
              alt="Runner with torch"
              className="runner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemainItems2;