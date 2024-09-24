import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";
const PokemonList = ({ pokemons }) => {
  return (
    <ul className="PokemonList">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export { PokemonList };
