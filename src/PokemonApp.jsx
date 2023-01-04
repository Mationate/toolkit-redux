import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemon } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPokemon());
    }, [])
    
  return (
    <>
    <h1>Pokemon App</h1>
    <hr />
    <ul>
        <li>Hola</li>
    </ul>

    </>
    )
}
