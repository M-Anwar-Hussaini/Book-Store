import { createSlice } from '@reduxjs/toolkit';
import { addBook, getAllBooks, removeBook } from '../../api/utilities';

function destruct(key, [element]) {
  return {
    item_id: key,
    title: element.title,
    author: element.author,
    category: element.category,
  };
}
// Initial state:
const initialState = {
  books: [],
  length: 0,
  hasError: false,
  errorMessage: '',
  isLoading: false,
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.errorMessage = '';
    }).addCase(getAllBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    }).addCase(getAllBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.errorMessage = '';

      const keys = Object.keys(action.payload);
      state.books = keys.map((key) => destruct(key, action.payload[key]));
      state.length = state.books.length;
    }).addCase(removeBook.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.errorMessage = '';
    })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.hasError = false;
        state.length -= 1;
        state.errorMessage = '';
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.hasError = true;
        state.errorMessage = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = '';
        state.hasError = false;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
        state.length += 1;
        state.hasError = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default bookSlice.reducer;
