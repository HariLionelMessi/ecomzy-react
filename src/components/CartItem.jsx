import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slicers/CartSlice";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch()
  function removeFromCart() {
    dispatch(remove(item.id))
    toast.success("Item removed")
  }
  return (
    <div>
      <div className="flex items-center mb-5 gap-4 border-b-2 pb-2">
          <div>
            <img className="w-[90%] max-w-[200px] " src={item.image} alt="" />
          </div>
          <div className="flex flex-col">
            <h1>{item.title}</h1>
            <p>{item.description.substring(0,100)}</p>
            <div className="py-3 flex justify-between">
                <p className="font-bold text-green-400">${item.price}</p>
                <button className="w-[25px] text-red-400 h-[25px] flex justify-center items-center rounded-full bg-pink-200" onClick={removeFromCart}> <MdDelete /> </button>
          </div>
          </div>
          
      
      </div>
    </div>
  )
}

export default CartItem
