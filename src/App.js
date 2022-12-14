import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Slider from "./components/Slider";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Media from "./components/Media";
import Whatsapp from "./components/Whatsapp";


function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Bio />
      <Slider />
      <Demo />
      <Media />
      <Footer />
      <Whatsapp/>
  
    </div>
  );
}

export default App;
