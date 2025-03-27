import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard2.css";

const Dashboard2 = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  // Fetch equipment data from backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/admin/equipments")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, []);

  // Handle add equipment
  const addEquipment = async () => {
    const equipment_name = prompt("Enter Equipment Name:");
    const equipment_type = prompt("Enter Equipment Type:");
    const description = prompt("Enter Equipment Description:");
    const status = prompt("Enter Equipment Status (e.g., 'Available', 'In Use', etc.):");

    if (!equipment_name || !equipment_type || !description || !status)
      return alert("Invalid Input!");

    try {
      await axios.post("http://127.0.0.1:8000/admin/equipments", {
        equipment_name,
        equipment_type,
        description,
        equipment_status: status,
      });
      alert("Equipment Added Successfully!");
      window.location.reload(); // Refresh data
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  // Handle update equipment
  const updateEquipment = async (id) => {
    const equipment_name = prompt("Enter Equipment Name:");
    const equipment_type = prompt("Enter Equipment Type:");
    const description = prompt("Enter Equipment Description:");
    const status = prompt("Enter Equipment Status:");

    if (!equipment_name || !equipment_type || !description || !status)
      return alert("Invalid Input!");

    try {
      await axios.put(`http://127.0.0.1:8000/admin/equipments/${id}`, {
        equipment_name,
        equipment_type,
        equipment_status: status,
        description,
      });
      alert("Equipment Updated Successfully!");
      window.location.reload(); // Refresh data
    } catch (error) {
      console.error("Error updating equipment:", error);
    }
  };

  // Handle delete equipment
  const deleteEquipment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/admin/equipments/${id}`);
      alert("Equipment Deleted Successfully!");
      window.location.reload(); // Refresh data
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  };

  return (
    <div className="main-content">
      <h1>Sports Equipment</h1>
      <div className="items-section">
        <h2>Equipment List</h2>
        <div className="table-container">
          <table className="equipment-table">
            <thead>
              <tr>
                <th>Equipment Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.equipment_id}>
                  <td>{item.equipment_name}</td>
                  <td>{item.equipment_type}</td>
                  <td>{item.description}</td>
                  <td>
                    <span className={`status ${item.equipment_status.toLowerCase()}`}>
                      {item.equipment_status}
                    </span>
                  </td>
                  <td className="action-buttons">
                    <button onClick={() => updateEquipment(item.equipment_id)} className="update-button">
                      Update
                    </button>
                    <button onClick={() => deleteEquipment(item.equipment_id)} className="remove-button">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={addEquipment} className="add-button">Add Equipment</button>
      </div>
    </div>
  );
};

export default Dashboard2;
