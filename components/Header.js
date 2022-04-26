import React from 'react'
import Head from 'next/head'
const Header = ({title}) => {
  return (
    <Head>
    <title>{title}-Hunting Coder </title>
    <meta name="description" content="Hunting Coder" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export default Header