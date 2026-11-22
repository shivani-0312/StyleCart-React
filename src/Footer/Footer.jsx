import React from 'react'
import instagram_icon from '../Ecommerce_Assets/Assets/Frontend_Assets/instagram_icon.png'
import pintester_icon from '../Ecommerce_Assets/Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Ecommerce_Assets/Assets/Frontend_Assets/whatsapp_icon.png'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footerLinks">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footerIcons">
            <img src={instagram_icon} alt=''/>
            <img src={pintester_icon} alt=''/>
            <img src={whatsapp_icon} alt=''/>
        </div>
        <hr/>
        <div className="copyrights">
            
        </div>
    </div>
  )
}

export default Footer