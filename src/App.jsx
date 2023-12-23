import "./App.css";
import Hero from "./components/main/heroSection/Hero";
import MainHeader from "./components/main/mainHeader/MainHeader";
import StarsCanvas from "./components/main/starbackground/starbackground";
function App() {
  return (
    <>
      <StarsCanvas />
      <div className="aboveBackground">
        <MainHeader />
        <Hero />
      </div>
    </>
  );
}

export default App;
