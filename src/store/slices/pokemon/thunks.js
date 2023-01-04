import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./PokemonSlice"

export const getPokemon = (page =0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemon());
        // TODO hacer peticion http 
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
        // const data = await resp.json();
        // console.log(data);
        dispatch(setPokemon({pokemons: data.results, page: page +1}));
    }
}