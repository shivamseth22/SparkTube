import { configureStore } from "@reduxjs/toolkit";
// import { defaults } from "autoprefixer";
import appSlice from "./appSlice";

const store = configureStore({
    reducer: {
        app : appSlice,
    },
});

export default store;