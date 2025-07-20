import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const itemToBeAdded = action.payload;
      if (itemToBeAdded) {
        state.items.push({...itemToBeAdded,  quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemToBeRemoved = action.payload;
      const isFound = state.items.findIndex(
        (item) => item.name == itemToBeRemoved.name
      );
      if (isFound!=-1) {
        state.items.splice(isFound, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { itemToUpdate, amount } = action.payload;
      const isFound = state.items.findIndex(
        (item) => item.name == itemToUpdate.name
      );
      if (isFound != -1) {
        state.items[isFound].quantity =amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
