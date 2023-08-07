import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Test from './components/Test';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './components/responsive.css';
import AOS from 'aos';
import React, { useRef , useEffect, useState} from 'react';
import 'aos/dist/aos.css';
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

function App() {
  
  return (
    <div className="App">
      <div className='shown'>
      <Navbar />
      <Splide
        options={{
          type: "slide",
          height: "100vh",
          direction: "ttb",
          wheel: true,
          arrows: false,
       
        }}
      >
        <SplideSlide>
          <Hero />
        </SplideSlide>

        <SplideSlide >
          <About />
        </SplideSlide>

        <SplideSlide>
          <Skills />
        </SplideSlide>
        
        <Splide options={{
          direction: "ttb",
          height: "100vh",
          rewind: true,
          wheel: true,
          arrows: false,
          releaseWheel: true
          
        }}>
        <SplideSlide >
          <Projects />
        </SplideSlide>
        </Splide> 
        {/* <SplideSlide>
          <Contact />
        </SplideSlide> */}
      </Splide>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </div>
      <div className='normal'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects/>
      </div>
    </div>
    
  );
}

export default App;