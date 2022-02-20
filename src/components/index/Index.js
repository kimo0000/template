import React from 'react';
import Home from '../home/Home';
import Work from '../work/Work';
import Portfolio from '../portfolio/Portfolio';
import Profil from '../profil/Profil';
import Creative from '../creative/Creative';
import Social from '../social/Social';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';



const Index = () => {
  return (
    <div>
         <Home />
         <Work />
         <Portfolio />
         <Profil />
         <Creative />
         <Social />
         <Contact />
         <Footer />
    </div>
  )
}

export default Index