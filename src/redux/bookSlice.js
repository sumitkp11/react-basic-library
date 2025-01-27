import { createSlice, nanoid } from "@reduxjs/toolkit";
import { saveDataToLocalStorage } from "./utility/localStorage";
import { loadLocalDataFromLocalStorage } from "./utility/localStorage";


const initialState = {
    books: []
};

/**
 * 
 * @argument reducers
 * @description every function in a reducer will always have access to 'state' and 'action'.
 */
export const bookSlice = createSlice({
    name: 'basicLibrary',
    initialState,
    reducers: {
        addBookDetails: (state, action) => {
            const bookDetails = {
                id: nanoid(),
                bookTitle: action.payload.bookTitle,
                readStatus: action.payload.readStatus
            };
            state.books.push(bookDetails);
        },
        removeBookDetails: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload);
        },
        updateBookDetails: (state, action) => {
            state.books = state.books.map(item => item.id === action.payload.id ? {...item, ...action.payload}: item);
            console.log("after update", state.books);
        },

    }
});

/**
 * @description exporting reducers functionalities for use in components
 */
export const {addBookDetails, removeBookDetails, updateBookDetails} = bookSlice.actions;

/**
 * @description exporting all reducers functions for the store
 */
export default bookSlice.reducer;