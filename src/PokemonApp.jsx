import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const {isLoading, pokemon, page} = useSelector(state => state.pokemon);
    useEffect(() => {
      dispatch(getPokemon());
    }, [])
    
  return (
    <>
    <h1>Pokemon App</h1>
    <hr />
    <span>loading: {isLoading ? 'True' : 'False'} </span>
    <ul>
      {pokemon.map(poke => 
        (<li key={poke.name}>{poke.name} </li> )
        ) }
    </ul>
    <button
    disabled={isLoading}
    onClick={() => dispatch(getPokemon(page))}
    >
     Next 
    </button>
    </>
    )
}
