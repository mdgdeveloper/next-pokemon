import { Grid, Card } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from "."

interface Props {
  pokemons: number[]
}
export const FavoritesPokemon: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map((id: number) => (
          <Grid
            xs={6}
            sm={3}
            md={2}
            xl={1}
            key={id}
          >
            <FavoriteCardPokemon id={id} />
          </Grid>
        ))
      }
    </Grid.Container>
  )
}
