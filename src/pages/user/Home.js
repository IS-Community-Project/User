import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

// Import images for the slideshow
import slide1 from '../../assets/Frame 6.png';
import slide2 from '../../assets/Frame 6.png';
import slide3 from '../../assets/Frame 6.png';

// Import images for team members
import directorImage from '../../assets/Ellipse 26.png';
import assistantManagerImage from '../../assets/Ellipse 27.png';
import technicalOfficerImage from '../../assets/Ellipse 28.png';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/borrowed_items_user">Borrowed Items</Link></li>
          <li><Link to="/remain_items1_user">Remaining Items</Link></li>
        </ul>
        <div className="nav-right">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/Register" className="btn">Signup</Link>
        </div>
      </nav>
      
      {/* Auto Slideshow Section */}
      <section className="image-section">
        <ImageSlider />
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

/* Component: Image Slider */
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enables auto-sliding
    autoplaySpeed: 3000,  // Changes slide every 3 seconds
    arrows: false  // Hides navigation arrows
  };

  return (
    <Slider {...settings} className="slider">
      <div><img src={slide1} alt="Slide 1" className="slider-image" /></div>
      <div><img src={slide2} alt="Slide 2" className="slider-image" /></div>
      <div><img src={slide3} alt="Slide 3" className="slider-image" /></div>
    </Slider>
  );
};

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

export default Home;