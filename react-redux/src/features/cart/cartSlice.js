import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload
            const selectedCartIndex = state.cartItems.findIndex(product => product.id === newItem.id)

            // jika product ada di keranjang
            if(selectedCartIndex !== -1) {
                state.cartItems[selectedCartIndex].quantity += 1
                state.cartItems[selectedCartIndex].totalPrice = state.cartItems[selectedCartIndex].quantity * newItem.price
            
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        },
        removeItemFromCart: () => {}
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice

export const selectCartItems = state => state.cart.cartItems
export const selectCartTotalItems = state => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotalPrices = state => state.cart.cartItems.reduce((total, item) => total + item.price, 0)