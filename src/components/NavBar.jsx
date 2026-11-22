import React from 'react'
import './NavBar.css'
import  cart_icon from '../Ecommerce_Assets/Assets/Frontend_Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import StyleCart_image from '../Ecommerce_Assets/Assets/Frontend_Assets/StyleCart_image.png'

const NavBar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navlogo">
            <p>StyleCart</p>
            {/* <img src={StyleCart_image} alt=''/> */}

        </div>
        <ul className="nav-links" type='none'>
            <li>
                <NavLink to='/' className={({isActive})=>isActive?"active":""}>Shop</NavLink>
                </li>
            <li><NavLink to='/men' className={({isActive})=>isActive?"active":""}>Men</NavLink></li>
            <li><NavLink to='/women' className={({isActive})=>isActive?"active":""}>Women</NavLink></li>
            <li><NavLink to='/kids' className={({isActive})=>isActive?"active":""}>Kids</NavLink></li>

        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-bar-count'>
                0
            </div>
            


        </div>

    </div>
    <div className="line">

    </div>
    </>
  )
}

export default NavBar