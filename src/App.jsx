import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProject from './components/FeaturedProject'
// import ClientReview from './components/ClientReview'
import Cards from './components/Cards'
import Footer from './components/Footer'
import gsap, { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

import "./a.css"
import logo1 from "./assets/logo001.svg"
import logo2 from "./assets/logo002.svg"
import logo3 from "./assets/logo003.png"
import LocomotiveScroll from 'locomotive-scroll'



function App() {


  // const locomotiveScroll = new LocomotiveScroll()

  useEffect(() => {
    let locomotiveScroll = null;

    // Function to initialize Locomotive Scroll
    const initLocomotiveScroll = () => {
      locomotiveScroll = new LocomotiveScroll({
        // Add your Locomotive Scroll options here
      });
    };

    // Function to destroy Locomotive Scroll
    const destroyLocomotiveScroll = () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        locomotiveScroll = null;
      }
    };

    // Function to handle viewport size changes
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      // Check viewport width and initialize/destroy Locomotive Scroll accordingly
      if (viewportWidth > 768) {
        initLocomotiveScroll();
      } else {
        destroyLocomotiveScroll();
      }
    };

    // Initial setup
    handleResize();

    // Event listener for viewport size changes
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      destroyLocomotiveScroll();
    };
  }, []);

  const boxRef = useRef(null)

  // useEffect(() => {
  //   const box = boxRef.current
  //   gsap.from(box, {
  //     y: "1%",
  //     scrollTrigger: {
  //       trigger: box,
  //       start: "top",
  //       end: "200%",
  //       pin: true,
  //       pinSpacing: false,
  //       // markers: true
  //     }
  //   })
  // }, [boxRef.current])

  return (
    <div className='w-full min-h-screen text-[#212121] font-[gilroy] bg-[#F1F1F1] relative '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedProject />
      {/* <ClientReview /> */}
      <div ref={boxRef} className='w-full min-h-screen bg-[#F1F1F1] py-0 lg:py-5 lg:flex gap-5 px-5 lg:px-14 relative '>
        <div className='w-full lg:w-1/2'>
          <Cards image={logo1} bgcolor="#004D43" btntext="©️2019-2022" />
        </div>
        <div className='w-full lg:w-1/2  lg:flex gap-5'>
          <Cards width='w-full lg:w-1/2' image={logo2} bgcolor="#212121" btntext="rating 5.0 in clutch" />
          <Cards width='w-full lg:w-1/2' image={logo3} bgcolor="#212121" btntext="business bootcamp alumni" />

        </div>
      </div>
      <Eyes bgColor="bg-[#CDEA68]" />
      <Footer />
    </div>
  )
}

export default App
