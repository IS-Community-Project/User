import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard1.css';

// Import images
import cricketImage from '../../assets/cricketImage.png';
import netballImage from '../../assets/netballImage.png';
import footballImage from '../../assets/footballImage.png';
import badmintonImage from '../../assets/badmintonImage.png';
import tableTennisImage from '../../assets/tableTennisImage.png';
import athleticsImage from '../../assets/athleticsImage.png';

const Dashboard1 = () => {
  const navigate = useNavigate();

  const sportsItems = [
    { name: 'Cricket', image: cricketImage, path: '/dashboard2' },
    { name: 'Netball', image: netballImage },
    { name: 'Football', image: footballImage },
    { name: 'Badminton', image: badmintonImage },
    { name: 'Table Tennis', image: tableTennisImage },
    { name: 'Athletics', image: athleticsImage },
  ];

  return (
    <div className="dashboard">
      <div className="header">
        <div className="title">
          <h2>Sports Items</h2>
          <p className="availability">Availability (overall)</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search items..." />
        </div>
      </div>
      <div className="sports-grid">
        {sportsItems.map((item, index) => (
          <div 
            className="sports-item" 
            key={index} 
            onClick={() => item.path && navigate(item.path)}
            style={{ cursor: item.path ? 'pointer' : 'default' }}
          >
            <div className="name-box">{item.name}</div>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard1;