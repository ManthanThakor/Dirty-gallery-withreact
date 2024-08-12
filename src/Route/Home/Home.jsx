// src/components/Home.js
import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
import ImageGallery from "../../components/ImageGallery";
import WelcomeSection from "../../components/WelcomeSection";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery</h1>
      </header>
      <main className="App-main">
        <WelcomeSection />
        <ImageGallery />
      </main>
    </div>
  );
};

export default Home;
