import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginFormSlice from "./slices/loginFormSlice";


const store = configureStore({
    reducer: {
        loginForm: loginFormSlice
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ 
        serializableCheck: false, 
    }).concat([]), 
}); 

setupListeners(store.dispatch)


export default store;   