import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Shop from './pages/Shop'
import ShopCategories from './pages/ShopCategories'
import LoginSignUp from './pages/LoginSignUp'
import Cart from './pages/Cart'
import Product from './pages/Product'
import banner_mens from '../src/Ecommerce_Assets/Assets/Frontend_Assets/banner_mens.png'
import banner_women from '../src/Ecommerce_Assets/Assets/Frontend_Assets/banner_women.png'
import banner_kids from '../src/Ecommerce_Assets/Assets/Frontend_Assets/banner_kids.png'

const App = () => {
  let router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Shop/>

        },
        {
          path:'/Men',
          element:<ShopCategories banner={banner_mens} category='men'/>
        },
        {
          path:'/Women',
         element:<ShopCategories banner={banner_women} category='women'/>
        },
        {
          path:'/Kids',
          element:<ShopCategories banner={banner_kids} category='kid'/>
        },
        {
          path:'/product/:productId',
          element:<Product/>
        },
        
        {
          path:'login',
          element:<LoginSignUp/>
        },
        {
          path:'cart',
          element:<Cart/>
        }
      ]
        }

  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App