import React from "react";
import "../App.css";
import ParticleCom from "./Particles/ParticleCom";
import Navbars from "./Navbar/Navbars";
import Home from "./Home/Home";
import About from "./About/About";
import Expertise from "./Expertise/Expertise";
import Collaborate from "./Collaborate/Collaborate";
import Testmonials from "./Testmonials/Testmonials";
import Footer from "./Footer/Footer";
import Contuct from "./Contuct/Contuct";
const App = () => {
  return (
    <div>
      <ParticleCom />
      <Navbars />
      <div className="absolute w-full top-24 md:top-32 lg:top-36 z-20 h-[800px]">
        <div className="lg:px-32 md:px-16 px-10">
          <Home />
        </div>
        <div className="mt-32">
          <Expertise />
          <About />
          <Collaborate />
          <Testmonials />
          <Contuct />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;