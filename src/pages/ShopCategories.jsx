import React, { useContext } from 'react'
import Items from '../Items/Items'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Ecommerce_Assets/Assets/Frontend_Assets/dropdown_icon.png'
import './ShopCategories.css'


const ShopCategories = (props) => {
  let {all_product}=useContext(ShopContext);
  return (
    <div className="ShopCategories">
      <img src={props.banner} alt=''/>
      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className="shop-categoryProducts">
        {
          all_product.map((item,index)=>{
            if(props.category===item.category){
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
            }
          })
        }
      </div>
        </div>

  )
}

export default ShopCategories