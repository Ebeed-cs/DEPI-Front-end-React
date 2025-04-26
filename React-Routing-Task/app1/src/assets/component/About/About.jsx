import React from 'react'
import { useState } from 'react';
import Blog from '../Blog/Blog'

// parent componenet 


export default function About() {

  let [products,setProducts] = useState([
    {id:0, pName:'hp', price:2000, onsale:true},
    {id:1, pName:'dell', price:4000, onsale:false},
    {id:2, pName:'toshiba', price:6000, onsale:true},
    {id:3, pName:'hp', price:8000, onsale:false},
    {id:4, pName:'dell', price:9000, onsale:true},
    {id:5, pName:'toshiba', price:10000, onsale:false}
   ]);

  return (
    <div className='row justify-content-around'>
      {
        products.map(
          (product) => {
            return <Blog productItem = {product}/>
          }
        )
      }
    </div>
  )
}
