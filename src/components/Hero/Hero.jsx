import React from 'react'
import hand_icon from '../../Ecommerce_Assets/Assets/Frontend_Assets/hand_icon.png'
import arrow from '../../Ecommerce_Assets/Assets/Frontend_Assets/arrow.png'
import hero_image from '../../Ecommerce_Assets/Assets/Frontend_Assets/hero_image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero_left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="latestcoll">
                <button>Latest Collection</button>
                <img src={arrow} alt=''/>
            </div>

        </div>
        <div className="hero_right">
            <img src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero