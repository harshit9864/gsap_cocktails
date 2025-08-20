import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";
import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/hero.jsx";
import Cocktails from "./Components/Cocktails.jsx";
import About from "./Components/About.jsx";
import Art from "./Components/Art.jsx";
import Menu from "./Components/Menu.jsx";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
    </main>
  );
};

export default App;
