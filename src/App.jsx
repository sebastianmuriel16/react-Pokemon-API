import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./statics/podekux.svg";
import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemons } from "./actions";
import { getPokemons } from "./services/pokemons";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemosRes = await getPokemons();
      dispatch(setPokemons(pokemosRes));
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <Col span={4} offset={10}>
        <img className="App-logo" src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App; // export default App;
