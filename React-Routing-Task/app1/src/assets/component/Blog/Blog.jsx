// child component 
import React from 'react'

export default function Blog(props) {
    let {id , pName , price , onsale} = props.productItem;
  return (
        <div className='bg-light m-3 position-relative col-3' >
          <p> productId: {id} </p>
          <p> productName: {pName} </p>
          <p> productPrice: {price} </p>
          {onsale==true? 
            <div className='bg-danger position-absolute top-0 end-0 p-2'>sale</div> : ''
          }
        </div>  
  )
}
