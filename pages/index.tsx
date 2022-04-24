import type { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';

import { Layout } from '../components/layouts/';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';

import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title='Listado de Pokemons'>
        <Grid>
          <Grid.Container gap={2} justify='flex-start'>
            {pokemons.map((pokemon: SmallPokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
          </Grid.Container>
        </Grid>
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke: any, id: number) => {
    return ({
      ...poke,
      id: id + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`
    })
  })

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage

