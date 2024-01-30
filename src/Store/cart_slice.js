import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({...newItem, quantity: 1});
            }
            state.totalQuantity++;
        },
        removeItemFromCart(state, action) {
            const cartItem = action.payload;
            const existingItem = state.items.find(item => item.name === cartItem.name);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.name !== cartItem.name);
                } else {
                    existingItem.quantity--;
                }

                state.totalQuantity--;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
