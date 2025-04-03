interface PokemonI {
  name: string;
  imgSrc?: string;
}

interface CardPropsI {
  pokemon: PokemonI;
}

function PoKemonCard({ pokemon }: CardPropsI) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PoKemonCard;
