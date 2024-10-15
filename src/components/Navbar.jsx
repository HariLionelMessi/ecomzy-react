import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import "../App.css"
import { BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

// top: -8px;
//     right: -8px;
//     background: red;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     width: 15px;
//     height: 15px;
//     padding: 8px;
//     font-size: 14px;

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartItem)
  return (
    <div className='bg-black p-3'>
        <nav className=' text-white w-[90%] max-w-[1100px] mx-auto flex items-center justify-between'>
            <img src={logo} className='h-[40px]'  alt="Ecomzy Logo" />
            <div className='flex items-center gap-7'>
                <NavLink className="hover:text-[#4ade80] duration-200 transition-all"  to="/">Home</NavLink>
                <NavLink className="hover:text-[#4ade80] duration-200 transition-all relative"  to="/cart"><BsCartFill fontSize="1.2rem" />
                
                {cart.length > 0 ? (
                  <span className='absolute top-[-8px] right-[-8px] bg-red-700 flex justify-center items-center rounded-full w-[15px] h-[15px] p-2 text-[14px] text-white' >{cart.length}</span>
                ) : null}
                
                </NavLink>
            </div>
        </nav>
    </div>


  )
}

export default Navbar




