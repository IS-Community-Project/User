import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import './RemainItems1.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search items..."
        className="search-input"
      />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

const RemainItems1 = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const items = {
    Cricket: [
      { name: 'Normal bat', count: 5 },
      { name: 'Normal Cricket ball', count: 2 },
      { name: 'Wicket-Keeping Pads', count: 2 },
      { name: 'Thigh Guard', count: 2 },
    ],
    Netball: [
      { name: 'Netball', count: 5 },
      { name: 'Netball Bibs', count: 5 },
      { name: 'Netball Net', count: 3 },
      { name: 'Whistle', count: 2 },
    ],
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filterItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleItemClick = (item) => {
    // Use navigate to redirect to the RemainItems2 page and pass the selected item as state
    navigate('/remain_items2', { state: { item } });
  };

  return (
    <>
      <div className="top-box">
        <h2>Remain Sports Items</h2>
      </div>

      <div className="remain-items">
        <div className="header-container">
          <h1 className="header-title">
            Remain Sports Items
            <span className="availability">Availability (Remain)</span>
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="items-container">
          {Object.keys(items).map((category) => (
            <div className="category-box" key={category}>
              <h3>{category}</h3>
              {filterItems(items[category]).map((item, index) => (
                <div 
                  className="item" 
                  key={index} 
                  onClick={() => handleItemClick(item)} // Handle item click
                >
                  <span>{item.name}</span>
                  <span className="count">{item.count}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RemainItems1;