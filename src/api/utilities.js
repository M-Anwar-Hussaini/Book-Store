import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const myBookStoreId = 'Uc20cAFSnSyU82tMWhQ6';
const commonURl = `${baseUrl}${myBookStoreId}/books`;

// Functions
const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  try {
    const res = await axios(commonURl);
    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const res = await axios.post(commonURl, book);
    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    const res = await axios.delete(`${commonURl}/${bookId}`);
    return res.data;
  } catch (error) {
    return error;
  }
});

export { getAllBooks, addBook, removeBook };
