import { setPokemon, startLoadingPokemon } from "./PokemonSlice"

export const getPokemon = (page =0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemon());
        // TODO hacer peticion http 
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
        const data = await resp.json();
        console.log(data);
        // dispatch(setPokemon());
    }
}