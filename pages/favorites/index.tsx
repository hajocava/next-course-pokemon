import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorities } from "../../components/ui";
import { localFavorities } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([])

  useEffect(() => {
    setFavoritePokemons(localFavorities.pokemons())
  }, [])
  

  return (
    <Layout title="Pokémons - Favoritos">
      {
        favoritePokemons.length === 0 
          ? <NoFavorities />
          : <FavoritePokemons pokemons={favoritePokemons} />
      }
    </Layout>
  );
};

export default FavoritesPage;
