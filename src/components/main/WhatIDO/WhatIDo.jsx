import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../WhatIDO/whatido.css";
import allsvg from "../../../assets/mainIconsdark.svg";
import video from "../../../assets/cropped.png";
const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const textyBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const WhatIDo = () => {
    return (
      <motion.div className="whatidocontainer">
        <motion.h1 style={{ y: yBg }} className="wxoeriences">
          I create experiences on the <span className="experienf">WEB</span>
        </motion.h1>
        <img className="allsvg2" src={allsvg} />
      </motion.div>
    );
  };

  return (
    <div ref={ref}>
      <WhatIDo />
    </div>
  );
};

export default Parallax;
