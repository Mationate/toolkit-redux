import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/'
import { PokemonSlice } from './slices/pokemon/PokemonSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: PokemonSlice.reducer
  },
})