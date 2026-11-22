import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Popular from '../Popular/Popular.jsx'
import Offers from '../Offers/Offers.jsx'
import NewCollections from '../NewCollections/NewCollections.jsx'
import Footer from '../Footer/Footer.jsx'



const Shop = () => {
  return (
    <div>
      <Hero/>
      <br/><br/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Footer/>
    </div>
    
  )
}

export default Shop