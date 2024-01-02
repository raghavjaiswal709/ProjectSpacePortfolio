import React from "react";
import "../technologiesIuse/technologiesiuse.css";
import reactsvg from "../../../assets/svgs/react-2.svg";
import nodesvg from "../../../assets/svgs/nodejs-icon.svg";
import mongotsvg from "../../../assets/svgs/mongodb-icon-1.svg";
import framersvg from "../../../assets/svgs/framer-motion.svg";
import gitsvg from "../../../assets/svgs/gitwhite.png";
import awssvg from "../../../assets/svgs/amazon-web-services-2.svg";
import expresssvg from "../../../assets/svgs/express-109.svg";
import bootssvg from "../../../assets/svgs/bootstrap-5-1.svg";
import tailssvg from "../../../assets/svgs/tailwindcss.svg";

const TechnologiesIUse = () => {
  return (
    <div className="technologies">
      <div className="mainContainer">
        <h1 className="headingtechiuse">Technologies i use</h1>
      </div>
      <div className="justtocenterdiv">
        <div className="svgcontainer">
          <img className="reactsvgimg" src={reactsvg} />
          <img className="nodesvgimg" src={nodesvg} />
          <img className="mongosvgimg" src={mongotsvg} />
          <img className="expresssvgimg" src={expresssvg} />
          <img className="framersvgimg" src={framersvg} />
          <img className="gitsvgimg" src={gitsvg} />
          <img className="awssvgimg" src={bootssvg} />
          <img className="awssvgimg" src={tailssvg} />

          <img className="awssvgimg" src={awssvg} />
        </div>
      </div>
    </div>
  );
};

export default TechnologiesIUse;
