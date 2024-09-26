import { Card } from "antd";
import { StarButton } from "./StarButton";
const { Meta } = Card;
import "./PokemonCard.css";
import { useDispatch } from "react-redux";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch({ type: "SET_FAVORITE", payload: pokemon.id });
  };

  return (
    <Card
      title={pokemon.name}
      cover={
        <img className="Pokemon-image" src={pokemon.image} alt={pokemon.name} />
      }
      extra={
        <StarButton isFavorite={pokemon.favorite} onClick={handleFavorite} />
      }
    >
      <Meta
        description={
          <ul className="Pokemon-types">
            <p>Types: </p>
            {pokemon.types.map((type) => (
              <li className="Pokemon-type" key={type.type.name}>
                {type.type.name}
              </li>
            ))}
          </ul>
        }
      />
      <Meta
        description={
          <ul className="Pokemon-abilities">
            <p>Abilities: </p>
            {pokemon.abilities.map((ability) => (
              <li className="Pokemon-ability" key={ability.ability.name}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        }
      />
    </Card>
  );
};

export { PokemonCard };
