import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
const CartPage = () => {
  const  cart = useSelector((state) => state.cart.cartItem)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
      setTotalAmount( cart.reduce((acc, cur) => acc + cur.price ,0) )
  }, [cart])

  return (
    <div>
      {
        cart && cart.length > 0
          ? (
            <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] max-w-[1100px] gap-8 mx-auto py-[3rem]'>
              <div>
                {
                  cart.map((item, index) => {
                    return (
                      <CartItem key={index} itemIndex={item.id} item={item} />
                    )
                  })
                }
              </div>

              <div>
                  <div className=''>
                    <div>Your Cart</div>
                    <div>Summary</div>
                    <p><span>Total Items: {cart.length}</span></p>
                  </div>
                  <div>
                    <p>Total Amount: {totalAmount.toFixed(2)}</p>
                  </div>

                  <div><button>Checkout</button></div>
              </div>
            </div>
          )
          : (
            <div className='min-h-[80vh] gap-2 flex flex-col justify-center items-center'>
              <h1>Card Empty</h1>
              <Link to={"/"}>
                <button className='bg-green-500 px-3 py-1 rounded-md font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:text-[rgba(255,255,255,0.9)]'>Go to Home</button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default CartPage
