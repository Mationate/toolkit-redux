import { createSlice } from '@reduxjs/toolkit';
export const PokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: {
        page: 0,
        pokemon: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemon: (state, /* action */ ) => {
            state.isLoading = true
        },
        setPokemon: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemon = action.payload.pokemon
        }
    }
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemon,setPokemon } = PokemonSlice.actions;