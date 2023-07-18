import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state, action) {
      if (state.length) return;
      state.push(action.payload || 'Under construction');
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
