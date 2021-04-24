import { useRouter } from 'next/router'
import { requests } from './../../utils/requests'
function Nav() {
  const router = useRouter()
  return (
    <nav>
      <ul className='flex flex-wrap justify-center py-3 border-b-[1px] border-gray-700'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <li
            key={key}
            className='whitespace-nowrap py-2 px-6 md:px-8 text-xl sm:text-2xl transform transition duration-200 cursor-pointer hover:text-white hover:scale-125 active:text-red-500'
            onClick={() => router.push(`/?genre=${key}`)}
          >
            <h2>{title}</h2>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
