import React, { useEffect, useRef } from "react";
import "../mytimeline/mytimelinecss.css";
import { motion, useTransform, useScroll } from "framer-motion";

const Mytimeline = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textyBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 className="whatido" style={{ y: textyBg }}>
        My Timeline.
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      {/* <motion.div className="mountains2"></motion.div> */}
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <motion.div className="sun"></motion.div>
    </div>
  );
};

export default Mytimeline;
