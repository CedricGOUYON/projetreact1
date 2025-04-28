interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  const handleClick = (name: string) => {
    if (name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonName(name);
  };

  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button type="button" onClick={() => handleClick(pokemon.name)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
