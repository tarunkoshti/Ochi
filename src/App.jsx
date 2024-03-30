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

function App() {

  const boxRef = useRef(null)

  useEffect(() => {
    const box = boxRef.current
    gsap.from(box, {
      y: "1%",
      scrollTrigger: {
        trigger: box,
        start: "top",
        end: "200%",
        pin: true,
        // markers: true
      }
    })
  }, [boxRef.current])

  return (
    <div className='w-full min-h-screen text-[#212121] font-[gilroy] bg-[#F1F1F1]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedProject />
      {/* <ClientReview /> */}
      <div ref={boxRef} className='w-full h-screen bg-[#F1F1F1] py-5 flex gap-5 px-14'>
        <div className='w-1/2'>
          <Cards image="/public/images/logo001.svg" bgcolor="#004D43" btntext="©️2019-2022" />
        </div>
        <div className='w-1/2 flex gap-5'>
          <Cards width='w-1/2' image="/public/images/logo002.svg" bgcolor="#212121" btntext="rating 5.0 in clutch" />
          <Cards width='w-1/2' image="/public/images/logo003.png" bgcolor="#212121" btntext="business bootcamp alumni" />

        </div>
      </div>
      <Eyes bgColor="bg-[#CDEA68]" />
      <Footer />
    </div>
  )
}

export default App
