import { useEffect, useState } from 'react';
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils";
import { FavoritesPokemon } from '../../components/pokemon/';


const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title="Favoritos">
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : (
            <FavoritesPokemon pokemons={favoritePokemons} />
          )
      }
    </Layout>
  )
}

export default Favorites
