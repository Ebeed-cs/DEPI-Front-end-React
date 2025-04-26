import React from 'react'
import { NavLink , Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul className='list-unstyled d-flex justify-content-around bg-danger'>
            <li>
                <NavLink to={'/about'} className='text-decoration-none text-capitalize' >about</NavLink>
            </li>
            <li>
                <NavLink to={'/parent'} className='text-decoration-none text-capitalize'  >parent</NavLink>
            </li>
        </ul>
    </div>
  )
}
