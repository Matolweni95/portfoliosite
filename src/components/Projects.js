import React from 'react';
import image from "../assets/poke.png";
import codeBlock from "../assets/codeBlock.svg";
import image2 from "../assets/git.png";
import image3 from "../assets/poke3.png";
import './Project.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

const Projects = () => {
  return (
    <div className='projects'>
        <div className='project-container' >
        <Splide 
             options={{
                wheel: true,
                arrows: false,
                lazyLoad: 'nearby',
              }}
        >
            <SplideSlide className='slide1-container '>
                <div className='slide1 animate__animated animate__slideInLeft animate__delay-1s" style="--animate-duration: 900ms;--animate-delay: 600ms;'>
                <h1>Portfolio & Previous Projects</h1>
                <p>I have built various different projects to fit different 
                    aspects of the client's business. If you want to see more 
                    examples of my work than the ones showcased in this site, 
                    please contact me!
                </p>
                <a href='#'>See more</a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='slide2 animate__animated animate__slideInLeft animate__delay-1s" style="--animate-duration: 900ms;--animate-delay: 600ms;'>
                    <div className='slide-container'>
                        <img className='project-img' src={image3} alt="Image 1"/>
                        <div className='slide2-content'>
                            <h3>PokeDex</h3>
                            <h1>Pokemon Go</h1>
                            <span>Online store for selling apparel & foot wear.</span>
                            <span className='text'>
                                Built with: React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, 
                                Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).
                            </span>
                            <span className='view'>View the code</span>
                            <span className='view'>Visit the app</span>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='animate__animated animate__slideInLeft animate__delay-1s" style="--animate-duration: 900ms;--animate-delay: 600ms;'>
                        <div className='slide-container'>
                            <img className='project-img' src={image2} alt="Image 1"/>
                                <div className='slide2-content'>
                                    <h3>GitHub</h3>
                                    <h1>GitHub Profiler</h1>
                                    <span>Online store for selling apparel & foot wear.</span>
                                    <span className='text'>
                                        Built with: React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, 
                                        Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).
                                    </span>
                                    <span className='view'>View the code</span>
                                    <span className='view'>Visit the app</span>
                                </div>
                        </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='animate__animated animate__slideInLeft animate__delay-1s" style="--animate-duration: 900ms;--animate-delay: 600ms;'>
                <div className='slide-container'>
                            <img className='project-img' src={image2} alt="Image 1"/>
                                <div className='slide2-content'>
                                    <h3>GitHub</h3>
                                    <h1>GitHub Profiler</h1>
                                    <span>Online store for selling apparel & foot wear.</span>
                                    <span className='text'>
                                        Built with: React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, 
                                        Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).
                                    </span>
                                    <span className='view'>View the code</span>
                                    <span className='view'>Visit the app</span>
                                </div>
                        </div>
                </div>
            </SplideSlide>
        </Splide>
        </div>
        <div className="project-btm-svg-container">
            <object className="project-btm-code-block" data={codeBlock}></object>
        </div>
    </div>
  );
};

export default Projects;