import React, { useState } from "react";
import './dashboard3.css';

function Dashboard3() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for saving
    const equipmentData = { name, quantity };

    try {
      // Uncomment and replace this part when adding database functionality
      // await axios.post("http://localhost:5000/api/equipment", equipmentData);
      
      console.log("Equipment Name:", name);
      console.log("Quantity:", quantity);

      // Show success notification
      setShowNotification(true);

      // Clear input fields
      setName("");
      setQuantity("");

      // Hide notification after 2 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="main-content">
      <h1>Sports Items</h1>
      <div className="box-container">
        <h3>Cricket</h3>
        <div className="content">
          <div className="form-container">
            <h4>Detail about the equipment</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  required
                />
              </div>
              <button type="submit" className="save-button">Save</button>
            </form>

            {/* Notification Message */}
            {showNotification && (
              <div className="notification">
                ✅ Done!
              </div>
            )}
          </div>
          <div className="image-container">
            <img
              src="https://via.placeholder.com/250" /* Replace with your image URL */
              alt="Cricket Player"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard3;
