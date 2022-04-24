import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
  id: number
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  }
  return (
    <Card hoverable clickable css={{
      padding: 10
    }}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={'100%'}
        height={140}
        onClick={onFavoriteClicked}
      />

    </Card>
  )
}
