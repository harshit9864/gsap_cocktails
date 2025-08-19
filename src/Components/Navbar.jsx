import React from 'react';
import {navLinks} from "../../Constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
        useGSAP(()=>{
            const navTween = gsap.timeline({
                scrollTrigger:{
                    trigger:'nav',
                    start:'bottom top'
                }
            })
            navTween.fromTo('nav',{
                backgroundColor:'transparent'},{
                    backgroundColor:'#000000050',
                    backgroundFilter:'blur(10px)',
                    duration:1,
                    ease:"power1.out"
            })
        })

  return (
    <nav className="px-10">
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="Logo"/>
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map(link => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
