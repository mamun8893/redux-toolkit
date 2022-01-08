import { createSlice } from "@reduxjs/toolkit";
import books from "../../fakeData/books.json";

const initialState = {
  discover: books,
  readingList: [],
  removeList: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFromReadingList: (state, { payload }) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToReadingList, removeFromReadingList } = bookSlice.actions;

export default bookSlice.reducer;
