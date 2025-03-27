import React from "react";
import "./borrowed_items_user.css";
//import image from "../../assets/userBorrow.png";
import image from "../../assets/User_Borrow2.jpg"; 
import { Link } from 'react-router-dom';

const BorrowedItems_user = () => {
  const borrowedItems = [
    { date: "07/01/2025", item: "Cricket Hard Ball Bat", icon: "🏏" },
    { date: "10/01/2025", item: "Netball", icon: "🏐" },
  ];

  return (
    <div className="borrowed-container">
      {/* Left side - Borrowed items list */}
      <div className="borrowed-table">
        <h2>Borrowed Items</h2>

        <nav className="navbar">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/borrowed_items_user">Borrowed Items</Link></li>
          <li><Link to="/remain_items1_user">Remaining Items</Link></li>
        </ul>
        <div className="nav-right">
          <Link to="/Home" className="btn">logout</Link>
         
        </div>
      </nav>
        {borrowedItems.map((item, index) => (
          <div key={index} className="borrowed-row">
            <span className="icon">{item.icon}</span>
            <div className="borrowed-details">
              <p className="borrowed-date">{item.date}</p>
              <p className="borrowed-item">{item.item}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Image */}
      <div className="borrowed-image">
        <img src={image} alt="Sports Activities" />
      </div>
    </div>
  );
};

export default BorrowedItems_user;