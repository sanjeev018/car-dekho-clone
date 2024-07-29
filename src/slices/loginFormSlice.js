import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginFormOpen: true,
};

const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,

    reducers: {
        setIsLoginFormOpen: (state) => {
            state.isLoginFormOpen = !state.isLoginFormOpen;
        },
    },
});

export const { setIsLoginFormOpen } = loginFormSlice.actions
export default loginFormSlice.reducer; 