import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';

import { Layout } from '../components/layouts/';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title='Listado de Pokemons'>
        <ul>
          <li>Pokemon</li>
        </ul>
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  // your fetch function here 

  return {
    props: {
      pokemons: data.results
    }
  }
}


export default HomePage

