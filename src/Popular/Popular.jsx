import React from 'react'
import Items from '../Items/Items'
import data_product from'../Ecommerce_Assets/Assets/Frontend_Assets/data'
import './Popular.css'

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {
                data_product.map((item,index)=>{
                    return(
                        <Items
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Popular