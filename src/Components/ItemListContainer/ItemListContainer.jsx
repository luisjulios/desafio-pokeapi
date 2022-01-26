import ItemList from "../ItemList/ItemList";
import Loading from '../../Assets/Images/loading.svg'
import { getPokemonData, getPokemons, searchPokemon } from "../../getAPI";
import {useState, useEffect} from "react";
import "./ItemListContainer.css";
import Search from "../Search/Search";

const ItemListContainer = ({greetings}) => {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [searching, setSearching] = useState(false)

  const fetchPokemons = async () => {
    try {
      setIsLoading(true)
      const data = await getPokemons(30)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setIsLoading(false)
      setNotFound(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setIsLoading(true)
    setNotFound(false)
    setSearching(true)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
      setIsLoading(false)
      return;
    } else {
      setPokemons([result])
    }
    setIsLoading(false)
    setSearching(false)
  }

  useEffect(() => {
    if(!searching) {
      fetchPokemons()
    }
  }, [])
    
  
  return (
    <main>
      <h2 className="greetings">{greetings}</h2>
      <Search onSearch={onSearch}/>
      {
        notFound ? <h3 className="notFound">Pokémon no encontrado</h3> : null
      }
      {isLoading ? <img src={Loading} alt="loading" className="loading"/> : <ItemList pokemons={pokemons}/>}
    </main>
  )
}

export default ItemListContainer;
