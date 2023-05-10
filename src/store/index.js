import { configureStore } from "@reduxjs/toolkit";
import lojasSlice from './Reducers/lojas';
import produtossSlice from './Reducers/produtos';

const initialState = JSON.parse(localStorage.getItem('lojas')) || [];

const store = configureStore({
    reducer: {
        lojas: lojasSlice,
        produtos: produtossSlice,
    },
    preloadedState: {
        lojas: initialState,
    },
});

export default store;
