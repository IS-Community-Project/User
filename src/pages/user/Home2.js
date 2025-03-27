import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import image from '../../assets/Frame 6.png'; 

// Import local images for team members
import directorImage from '../../assets/Ellipse 26.png';
import assistantManagerImage from '../../assets/Ellipse 27.png';
import technicalOfficerImage from '../../assets/Ellipse 28.png';

function Home2() {
  return (
    <div className="home-container">
      {/* Navbar Component */}
      <nav className="navbar">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/borrowed_items_user">Borrowed Items</Link></li>
          <li><Link to="/remain_items1_user">Remaining Items</Link></li>
        </ul>
        <div className="nav-right">
          <Link to="/Home" className="btn">Logout</Link>
          
        </div>
      </nav>
      
      {/* Image Section */}
      <section className="image-section">
        <img src={image} alt="Group Activity" />
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="info-container">
          <OpeningHours />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
}

/* Component: Opening Hours */
const OpeningHours = () => {
  const hours = [
    { day: "Monday", time: "8.00AM–4.00PM" },
    { day: "Tuesday", time: "8.00AM–4.00PM" },
    { day: "Wednesday", time: "8.00AM–4.00PM" },
    { day: "Thursday", time: "8.00AM–4.00PM" },
    { day: "Friday", time: "8.00AM–4.00PM" },
    { day: "Saturday", time: "9.00AM–4.00PM" },
    { day: "Sunday", time: "9.00AM–4.00PM" },
  ];

  return (
    <div className="opening-hours">
      <h3>Opening Hours</h3>
      <table>
        <tbody>
          {hours.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* Component: Contact Information */
const ContactInfo = () => {
  const people = [
    { name: "Mr. V. Lakmal", role: "Director", phone: "078-8976543", img: directorImage },
    { name: "Mrs. M. Mahesha", role: "Assistant Manager", phone: "070-8976543", img: assistantManagerImage },
    { name: "Mr. V. S. Silva", role: "Technical Officer", phone: "076-8976543", img: technicalOfficerImage },
  ];

  return (
    <div className="contact-info">
      <div className="person-row">
        {people.map((person, index) => (
          <div className="person-card" key={index}>
            <img src={person.img} alt={person.role} />
            <p><strong>{person.role}</strong></p>
            <p>{person.name}</p>
            <p>{person.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2;
