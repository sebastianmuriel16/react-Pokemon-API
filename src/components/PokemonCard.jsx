import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.name}
      cover={
        <img className="Pokemon-image" src={pokemon.image} alt={pokemon.name} />
      }
      extra={<StarOutlined />}
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
