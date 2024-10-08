// src/components/Home.js
import React from "react";
import "./Home.css";
import Hslide from "../../components/Home/Hslide";
import WelcomeSection from "../../components/Home/WelcomeSection";
import Feature from "../../components/Home/Feature";

const Home = () => {
  return (
    <div className="App">
      <main className="App-main">
        <WelcomeSection />
      </main>
      <div>
        <div>
          <Feature />
        </div>
      </div>
      <div className="slide-home">
        <Hslide />
      </div>
    </div>
  );
};

export default Home;
