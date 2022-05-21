import React from 'react'
import About from './component/About'
import AllInOne from './component/AllInOne'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Pricing from './component/Pricing'
import Support from './component/Support'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Support />
    <AllInOne />
    <Pricing />
    <Footer />
    </>
  )
}

export default App