import React from 'react'
import notfoundImg from "../../images/notfound.jpeg"

export default function NotFound() {
  return (
    <div className='text-center'>
      <img src= {notfoundImg} alt="not found image page" className='w-50'/>
    </div>
  )
}
