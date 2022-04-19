import Head from "next/head"
import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode;
    title?: string;
}

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Sergio Madrigal" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        </Head>

        {/* Nabar */}

        <main>
            {children}
        </main>
    </>
  )
}
