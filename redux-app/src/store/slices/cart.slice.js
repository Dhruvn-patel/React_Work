import { createSelector, createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    
    
  },
});

export const getSelectorItems = createSelector(
  (state) => state.cart,
  (state) => state
);

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
