import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './slices/cart.slice'
export const store=configureStore({
    reducer:{
        cart:CartReducer
    }
})