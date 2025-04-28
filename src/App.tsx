import { useState } from "react";
import "./App.css";
import PokemonCard from "./Components/PoKemonCard";

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <section>
      <PokemonCard />
    </section>
  );
}
export default App;
