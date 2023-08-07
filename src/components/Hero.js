import React from 'react';
import './Hero.css';
import './animate.css';
import heroImg from "../assets/hero.svg";
import heroBlock from "../assets/purple_romb1.png";
import dots from "../assets/side-dots.png";

const Hero = () => {
  return (
    <div>
      <section className="hero " >
        <div className="hero-content">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Frontend Software Developer</h1>
                    <p>
                        Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
                    </p>
                    <div className="link-container">
                        <a href="#">Read more...</a>
                    </div>
                </div>
                <div className="hero-img">
                    <object  data={heroImg}></object>
                    <img className="dots_decor" src={dots} alt=""/>
                </div>
            </div>
            <img className="hero-cube" src={heroBlock}/>
          </div>
      </section>
    </div>
  );
};

export default Hero;