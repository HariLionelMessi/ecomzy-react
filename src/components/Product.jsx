import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { add, remove } from '../redux/slicers/CartSlice';



const Product = ({post}) => {
  // const [selected, setSelected] = useState(false)
  const cart = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch()
  function addtoCart() {
    dispatch(add(post))
    toast.success("Item added to Cart")
  }

  function removeCart() {
    dispatch(remove(post.id))
    toast.error("Item added to Cart")
  }
  
  return (
    <div className='w-[100%] max-w-[400px] mx-auto border-2 p-4 rounded-2xl flex flex-col justify-between '>
      <div>
        <p className='font-semibold text-[20px] text-center'>{`${post.title.substring(0,15)}...`}</p>
      </div>
      <div>
        <p>{`${post.description.substring(0,90)}...`}</p>
      </div>
      <div className='text-center'>
        <img className='w-[120px] mx-auto h-[150px]' src={post.image} alt={post.title} />
      </div>
      <div className='flex justify-between items-center pt-5 '>
        <p>{post.price}</p>
        {
        cart.some((e) => e.id === post.id) 
          ? (
            <button className='text-white bg-red-500 rounded-lg px-3 py-1' onClick={removeCart} >Remove Product</button>
          )
          : (
            <button className='text-white rounded-lg bg-green-500 px-3 py-1' onClick={addtoCart} >Add to cart</button>
          )
      }
      </div>
      
      {/* <button onClick={() =>toast.success('Added Successfully')}>add</button> */}
    </div>
  )
}
export default Product
