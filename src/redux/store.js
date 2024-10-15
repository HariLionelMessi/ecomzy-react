import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './slicers/CartSlice'

export default configureStore({
  reducer: {
    cart : CartSlice
  }
})