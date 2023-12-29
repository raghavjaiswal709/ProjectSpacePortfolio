import React from "react";
import { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import emoji from "../../../assets/emoji.png";
import "../heroSection/hero.css";

const Hero = () => {
  return (
    <div className="introsection">
      <div className="introsection2">
        <div className="thisisraghav">
          <h3>Hi there, this is</h3>
          <h3></h3>
          <h1 className="raghavtxt">Raghav</h1>
          <div className="typewrittereff">
            <Typewriter
              options={{
                strings: ["A Developer", "A Designer", "A Creator"],
                autoStart: true,
                loop: true,

                wrapperClassName: "typewriterpara",
              }}
            />
          </div>
        </div>
        <img src={emoji} />
      </div>
    </div>
  );
};

export default Hero;
