import React from "react";
import emoji from "../../../assets/emoji.png";
import "../heroSection/hero.css";

const Hero = () => {
  return (
    <div className="introsection">
      <div className="introsection2">
        <div>
          <h3>Hi there, this is</h3>
          <h3></h3>
          <h1 className="raghavtxt">Raghav</h1>
        </div>
        <img src={emoji} />
      </div>
    </div>
  );
};

export default Hero;
