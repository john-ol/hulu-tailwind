import FlipMove from 'react-flip-move'
import Item from './Item'

function Results({ title, results }) {
  return (
    <main>
      <h2 className='py-4 text-2xl font-bold text-white text-center'>
        {title}
      </h2>
      <FlipMove className='space-y-6 py-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4 3xl:grid-cols-5'>
        {results.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </FlipMove>
    </main>
  )
}

export default Results
