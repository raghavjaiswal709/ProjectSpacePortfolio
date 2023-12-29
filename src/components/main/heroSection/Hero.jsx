import React from "react";
import { useRef } from "react";
import { animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import emoji from "../../../assets/emoji.png";
import "../heroSection/hero.css";
import { useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../WhatIDO/whatido.css";

const Hero = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textyBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div className="introsection">
      <div className="introsection2">
        <div className="thisisraghav">
          <h3>Hi there, this is</h3>
          <h3></h3>
          <h1 style={{ y: yBg }} className="raghavtxt">
            Raghav
          </h1>
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
