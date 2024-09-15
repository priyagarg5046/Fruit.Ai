import React from 'react';
import './Home.css';
import { MdGTranslate } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";

const Home = () => {
  return (
    <div className="homepage-container">
      <h1 className="title">Fruit.Ai</h1>
      <p className="subtitle">"Be Healthy!"</p>

      <div className="services-grid">
        <Link to="/chatbot" className="service-box chat">
            <IoChatbubbleEllipsesOutline style={{ height: '40px', width: '40px' }}/>
        </Link>
        <Link to="/translator" className="service-box translate"> 
          <MdGTranslate style={{ height: '40px', width: '40px' }}/>
        </Link>
        <Link to="/faq" className="service-box faqs">FAQs</Link>
        <Link to="/about" className="service-box about">
            <FcAbout style={{ height: '40px', width: '40px' }}/>
        </Link>
      </div>

      <div className="pagination-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Home;
