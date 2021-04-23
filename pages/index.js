import Head from 'next/head'
import Header from './../components/Header/Header'
import Nav from '../components/Navbar/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu - tailwind css</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='px-4 w-full'>
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Nav />
        {/* Main results */}
      </div>
    </div>
  )
}
