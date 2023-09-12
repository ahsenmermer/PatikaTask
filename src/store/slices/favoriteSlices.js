import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favs: []
  },
  reducers: {
    setFavorites: (state, action) => {
      let favs = state.favs
      favs = favs?.filter(fav => fav?.id != action.payload?.id)
      favs.push(action.payload)
      state.favs = favs
      return state
    },
    deleteFavorites: (state, action) => {
      let favs = state.favs
      favs = favs.filter(fav => fav?.id != action.payload?.id)
      state.favs = favs
      return state
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFavorites , deleteFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer