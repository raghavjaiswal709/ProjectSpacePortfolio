import "./App.css";
import WhatIDo from "./components/main/WhatIDO/WhatIDo";
import Hero from "./components/main/heroSection/Hero";
import MainHeader from "./components/main/mainHeader/MainHeader";
import Parallax from "./components/main/parallax/Parallax";
import StarsCanvas from "./components/main/starbackground/starbackground";

// Import statements...

// Import statements...

function App() {
  return (
    <div className="App">
      <div
        className="backgroundContainer"
        style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}
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
        <Hero style={{ position: "relative", bottom: -900 }} />
      </div>
    </div>
  );
}

export default App;
