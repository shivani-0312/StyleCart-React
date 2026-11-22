import React, { createContext, useState } from 'react'
import all_product from '../Ecommerce_Assets/Assets/Frontend_Assets/all_product.js';
export let ShopContext=createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems]=useState([]);

    const addToCart=(product)=>{
      setCartItems([...cartItems,product]);
    };
    const contextValue={
      all_product,
      cartItems,
      addToCart
    };
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider