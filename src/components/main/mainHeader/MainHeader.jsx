import React from "react";
import "../mainHeader/MainHeader.css";
import signImage from "../../../assets/sign1.png";

const MainHeader = () => {
  return (
    <div className="containerMain">
      <div className="logoContainer">
        {/* <h1>RJ's Portfolio</h1>
        <h1>|</h1> */}
        <img className="logoimg" src={signImage} />
      </div>
      <div className="headerOption">
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">
          Experience
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Services
        </a>
        <a onClick={() => setMenuOpen(false)} href="#testimonial">
          Testimonial
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
