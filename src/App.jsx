import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
      </main>
    </div>
  );
};

export default App;