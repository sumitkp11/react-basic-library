import { createSlice, nanoid } from "@reduxjs/toolkit";
import { saveDataToLocalStorage } from "./utility/localStorage";
import { loadLocalDataFromLocalStorage } from "./utility/localStorage";


const initialState = {
    books: [
        
    ]
};

/**
 * 
 * @argument reducers
 * @description every function in a reducer will always have access to 'state' and 'action'.
 */
const loadLocalState = loadLocalDataFromLocalStorage();
export const bookSlice = createSlice({
    name: 'basicLibrary',
    loadLocalState,
    reducers: {
        addBookDetails: (state, action) => {
            console.log("Action: ", action);
            const bookDetails = {
                id: nanoid(),
                bookTitle: action.payload.bookTitle,
                readStatus: action.payload.readStatus
            };
            console.log("Before state change:", JSON.stringify(state.books), JSON.stringify(state));
            state.push(bookDetails);
            console.log("After state change:", JSON.stringify(state));
            saveDataToLocalStorage(state);
        },
        removeBookDetails: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload);
        },
        updateBookDetails: () => {},

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