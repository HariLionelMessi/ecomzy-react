import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: "cart",
    initialState : {
        cartItem: []
    },
    reducers: {
        add: (state, action) => {
            state.cartItem.push(action.payload)
        },
        remove: (state,action) => {
            state.cartItem = state.cartItem.filter((item) =>  item.id !== action.payload)
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;