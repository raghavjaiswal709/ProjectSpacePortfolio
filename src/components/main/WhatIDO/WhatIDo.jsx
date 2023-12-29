import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../WhatIDO/whatido.css";
const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 4.5], ["0%", "500%"]);
  const textyBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const WhatIDo = () => {
    return (
      <motion.div className="whatidocontainer">
        <motion.h1 style={{ y: yBg }} className="wxoeriences">
          I create experiences on web
        </motion.h1>
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
