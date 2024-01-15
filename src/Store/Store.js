import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/Counter/Index'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
})
