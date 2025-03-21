import { configureStore } from "@reduxjs/toolkit";
// import { counderSlice } from "./CounderSlice";
import slice from "./CounderSlice"

// initialise this file as store 
 export const store = configureStore({
    reducer :{
        counder:slice
    }
})