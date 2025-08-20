'use client'

import React, {useRef, useState} from 'react';
import {sliderLists} from "../../Constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    const contentref = useRef()
    const[currentindex,setcurrentindex] =useState(0)

    useGSAP(()=>{
        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1});
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{
            xPercent:0,opacity:1,duration:1,ease:'power1.inOut'})
        gsap.fromTo('.details',{yPercent:100,opacity:0,},{yPercent:0,opacity:100,ease:'power1.inOut'})
    },[currentindex])

    const totalcocktails = sliderLists.length;

    const gotoslide=(index)=> {
        const newindex = (index+totalcocktails)%totalcocktails;

        setcurrentindex(newindex);
    }

    const getcocktailat = (indexoffset)=>{
        return sliderLists[(currentindex+ indexoffset + totalcocktails)%totalcocktails]
    }

    const currentcocktail = getcocktailat(0);
    const prevcocktail = getcocktailat(-1);
    const nextcocktail = getcocktailat(1);


  return (
    <section id="menu" aria-labelledby="menu-heading" className="px-10">
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

        <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>
        <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
            {sliderLists.map((cocktail, index) => {
                const isActive = index === currentindex;

                return(
                    <button key={cocktail.id} className={`${isActive?'text-white border-white':'text-white/50 border-white/50'}`}
                        onClick={()=>gotoslide(index)}
                    >

                        {cocktail.name}
                    </button>
                )
            })}
        </nav>
        <div className="content">
            <div className="arrows">
                <button className="text-left " onClick={()=>gotoslide(currentindex-1)}>
                    <span>{prevcocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                </button>
                <button className="text-right" onClick={()=>gotoslide(currentindex+1)}>
                    <span>{nextcocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                </button>
            </div>
            <div className="cocktail">
                <img src={currentcocktail.image} className="object-contain"/>
            </div>

            <div className="recipe">
                <div ref={contentref} className="info">
                    <p>Recipe for:</p>
                    <p id="title">{currentcocktail.name}</p>
                </div>
                <div className="details">
                    <h2>{currentcocktail.title}</h2>
                    <p>{currentcocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Menu;
