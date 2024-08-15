import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return  (
  <>
  <Navbar/>
  <Hero/>
  <Services/>
  <Tours/>
  <About/>
<Footer/>
  </>
  );
}

export default App;
