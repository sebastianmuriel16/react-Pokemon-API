import { Col } from "antd";
import { Spin } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./statics/podekux.svg";
import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { getPokemons } from "./services/pokemons";

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(["data", "pokemons"])
  ).toJS();
  const loading = useSelector((state) =>
    state.getIn(["ui", "loading"], shallowEqual)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));

      setTimeout(() => {
        dispatch(setLoading(false));
      }, 500);
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

      {loading ? (
        <Col span={12} offset={12}>
          <Spin size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}

export default App; // export default App;
