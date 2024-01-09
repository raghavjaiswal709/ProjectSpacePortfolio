import "./App.css";
import WhatIDo from "./components/main/WhatIDO/WhatIDo";
import Hero from "./components/main/heroSection/Hero";
import MainHeader from "./components/main/mainHeader/MainHeader";
import Mytimeline from "./components/main/mytimeline/Mytimeline";
import Parallax from "./components/main/parallax/Parallax";
import Projects from "./components/main/projectss/Projects";
import StarsCanvas from "./components/main/starbackground/starbackground";
import TechnologiesIUse from "./components/main/technologiesIuse/TechnologiesIUse";
import Timeline from "./components/main/timeline/Timeline";

// Import statements...

// Import statements...

function App() {
  return (
    <div className="App">
      <div
        className="backgroundContainer"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <StarsCanvas />
      </div>
      <div
        className="aboveBackground"
        style={{ position: "relative", zIndex: 1 }}
      >
        <MainHeader />
        <Hero style={{ position: "relative", bottom: -900 }} />
        <Parallax />
        <WhatIDo />
        <Projects />
        <TechnologiesIUse />
        <Mytimeline />
        <Timeline />
      </div>
    </div>
  );
}

export default App;
