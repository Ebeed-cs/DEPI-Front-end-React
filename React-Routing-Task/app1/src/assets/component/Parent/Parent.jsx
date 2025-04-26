import React from 'react'
import { useState } from 'react'

export default function Parent() {
    // js
    let [count,setCount] = useState(0);
    let [userName,setName] = useState('ali');
    let [isAdmin,setAdmin] = useState(false);
    let [product,setProduct] = useState({pName:'hp' , price:2000});
    let [products,setProducts] = useState([
        {pName:'hp' , price:2000},
        {pName:'dell' , price:4000},
        {pName:'toshiba' , price:6000}

     ]);


    function changeCount(){
        // alert('hi');
        // setCount(10);
        setCount(Math.round(Math.random()*10))
    }


    function changeName(){
        setName('soha');
    }

    
    // binding {}   js  &  xml

  return (
    <div className='text-center'>
        <p> count: {count} </p>
        <p> Name: {userName} </p>
        <p> productName: {product.pName}  </p>
     
        {/* <button onClick={changeCount()} className='bg-danger p-3'>click</button> */}
         <button onClick={ ()=>{changeCount()} } className='bg-danger p-3 m-3'>click</button> 
         <button onClick={ ()=>{changeName()} } className='bg-danger p-3'>change_Name</button>

    </div>
  )
}

