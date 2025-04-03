import { useState } from "react";
import "./App.css";
import PokemonCard from "./Composents/PoKemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setpokemonName] = useState({ name: "bulbasaur" });

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName.name);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button type="button" onClick={() => setpokemonName({ name: "bulbasaur" })}>
        Bulbasaur
      </button>
      <button type="button" onClick={() => setpokemonName({ name: "mew" })}>
        Mew
      </button>
    </div>
  );
}
export default App;
