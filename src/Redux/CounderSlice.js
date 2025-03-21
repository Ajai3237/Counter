import { createSlice } from "@reduxjs/toolkit";

export const counderSlice = createSlice ({
    
    name:'counterApp',
    initialState:{
        value:0
        

    },
    reducers:{//Action are perform here

        increment:(state,action)=>{
            state.value = state.value+action.payload
        },
        // Function to decrement value

        decrement:(state,action)=>{
            state.value = state.value-action.payload
        },
        // Function to reset the value

        reset:(state)=>{
            state.value = 0
        }


    }
})
// Action is required by the component to perform increment , decrement and reset

export const {increment , decrement , reset}= counderSlice.actions;

// reducer is requried by the store
export default counderSlice.reducer
