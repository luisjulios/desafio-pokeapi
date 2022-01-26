import "./Item.css"
const Item = ({pokemon}) => {
  return (
    <div className="pokeCard" key={pokemon.id}>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={`Imagen de ${pokemon.name}`} className="pokeImage"/>
      <h3 className="pokeName">{pokemon.name}</h3>
      {pokemon.types.map((type) => {
        return <p key={type.type.name} className="pokeType">{type.type.name}</p>
      })}
    </div>
  )
}

export default Item
