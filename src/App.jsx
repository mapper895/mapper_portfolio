import React from "react";
import { Header, Hero } from "./components/";

const App = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#05c3dd]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
};

export default App;
