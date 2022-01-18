import "./ItemList.css";
import Item from '../Item/Item';

const ItemList = ({pokemons}) => {
  return (
    <section className='itemList'>
      {pokemons.map(pokemon => (
        <Item key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  )
}

export default ItemList
