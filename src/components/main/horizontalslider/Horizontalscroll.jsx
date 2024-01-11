import React from "react";
import reactsvg from "../../../assets/svgs/react-2.svg";
import nodesvg from "../../../assets/svgs/nodejs-icon.svg";
import mongotsvg from "../../../assets/svgs/mongodb-icon-1.svg";
import framersvg from "../../../assets/svgs/framer-motion.svg";
import gitsvg from "../../../assets/svgs/gitwhite.png";
import awssvg from "../../../assets/svgs/amazon-web-services-2.svg";
import expresssvg from "../../../assets/svgs/express-109.svg";
import bootssvg from "../../../assets/svgs/bootstrap-5-1.svg";
import tailssvg from "../../../assets/svgs/tailwindcss.svg";
import "../horizontalslider/horizontalscroll.css";

const Horizontalscroll = () => {
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slide">
          <img className="reactsvgimg techicons" src={reactsvg} />
        </div>

        <div className="slide">
          <img className="nodesvgimg techicons" src={nodesvg} />
        </div>

        <div className="slide">
          <img className="mongosvgimg techicons" src={mongotsvg} />
        </div>

        <div className="slide">
          <img className="expresssvgimg techicons" src={expresssvg} />
        </div>

        <div className="slide">
          <img className="framersvgimg techicons" src={framersvg} />
        </div>

        <div className="slide">
          <img className="gitsvgimg techicons" src={gitsvg} />
        </div>
        <div className="slide">
          <img className="awssvgimg techicons" src={bootssvg} />
        </div>

        <div className="slide">
          <img className="awssvgimg techicons" src={tailssvg} />
        </div>
        <div className="slide">
          <img className="awssvgimg techicons" src={awssvg} />
        </div>
      </div>
    </div>
  );
};

export default Horizontalscroll;
