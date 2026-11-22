import React, { useContext } from 'react'
import './Items.css'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'


const Items = (props) => {
    const {addToCart}=useContext(ShopContext)
    const navigate=useNavigate()

    const handleAddToCart=()=>{
        addToCart(props)
        navigate('/cart')
    }
  return (
    <div className="items">
        
            <img src={props.image} alt=''/>
        
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
        <button onClick={handleAddToCart}>
            Add to Cart
        </button>

    </div>
  )
}

export default Items