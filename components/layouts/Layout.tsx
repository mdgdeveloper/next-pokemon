import Head from "next/head"
import {FC, PropsWithChildren} from 'react';

export const Layout:FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
        <Head>
            <title>Pokemon App</title>
            <meta name="author" content="Sergio Madrigal" />
            <meta name="description" content="Informacion sobre el pokemon XXXXX" />
            <meta name="keywords" content="XXX, pokemon, pokedex" />
        </Head>

        {/* Nabar */}

        <main>
            {children}
        </main>
    </>
  )
}
