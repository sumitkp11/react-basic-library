import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/bookSlice";
import { loadLocalDataFromLocalStorage } from "./utility/localStorage";

/**
 * @description to create redux store
 */

const loadLocalState = loadLocalDataFromLocalStorage();
export const bookStore = configureStore({
    reducer: booksReducer,
    
})