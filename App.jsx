import React from "react"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Eyes from "./components/Eyes"
import LocomotiveScroll from 'locomotive-scroll'
import Featured from "./components/Featured"
import Featured2 from "./components/Featured2"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import Eyes2 from "./components/Eyes2"

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-black bg-white'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Featured2 />
    <Cards/>
    <Eyes2/>
    <Footer/>
    </div>
  )
}

export default App
