import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  const [canonical, setCanonical] = useState('')

  useEffect(() => {
    setCanonical(window.location.href.split('?')[0])
  }, [])

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout