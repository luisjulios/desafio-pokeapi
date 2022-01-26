export const searchPokemon = async (pokemon) =>{
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;  
  } catch (error) {
    console.log(error);
  }
};

export const getPokemons = async (limit = 30) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonData = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};