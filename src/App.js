import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscriptions from "./components/Subscriptions";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Subscriptions />
      <Footer />
    </div>
  );
}

export default App;
