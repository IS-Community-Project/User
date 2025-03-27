
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="brand">equipZone</h2>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/dashboard1" className="menu-link">
            <span className="icon material-icons">dashboard</span> Dashboard
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/borrowed_items1" className="menu-link">
            <span className="icon material-icons">assignment</span> Borrowed Items
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/remain_items1" className="menu-link">
            <span className="icon material-icons">inventory</span> Remain Items
          </Link>
        </li>
      </ul>
      <div className="separator"></div>
      <button className="logout">
        <span className="icon material-icons">logout</span> Logout
      </button>
    </div>
  );
};

export default Sidebar;

