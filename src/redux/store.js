import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articles";

export const store = configureStore({
    reducer: {
        article: articleReducer,
    }
})