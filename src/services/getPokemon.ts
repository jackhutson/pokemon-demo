import { Pokemon } from '../types/pokemon';

const pokeApiGetPokemonUrl = (term: string) =>
  `https://pokeapi.co/api/v2/pokemon/${term}/`;

export const getPokemon = async (term: string): Promise<Pokemon> => {
  const response = await fetch(pokeApiGetPokemonUrl(term));
  const data: Pokemon = await response.json();
  return data;
};
