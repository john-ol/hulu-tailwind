import Head from 'next/head'
import Header from './../components/Header/Header'
import Nav from '../components/Navbar/Nav'
import { requests } from './../utils/requests'
import Results from '../components/Results/Results'

export default function Home({ result, genre }) {
  const title = requests[genre].title
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
        <Results title={title} results={result} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending'
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())

  return {
    props: {
      result: request.results,
      genre,
    },
  }
}
