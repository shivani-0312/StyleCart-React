import React from 'react'
import hero_img from '../Ecommerce_Assets/Assets/Frontend_Assets/hero_image.png'
import './Offers.css'

const Offers = () => {
  return (
    
    <div className="offers">
        <div className="offers-left">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={hero_img} alt=''/>
        </div>
    </div>
  )
}

export default Offers