import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/bookSlice";

/**
 * @description to create redux store
 */
export const bookStore = configureStore({
    reducer: booksReducer,
})