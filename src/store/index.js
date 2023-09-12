import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  favoriteSlice  from './slices/favoriteSlices'

const reducers = combineReducers({
    favorites: favoriteSlice
})

const store = configureStore({
    reducer: reducers
})

export default store