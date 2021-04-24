import { forwardRef } from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
const Item = forwardRef(({ item }, ref) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  return (
    <div
      ref={ref}
      className='cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105'
    >
      <Image
        src={
          `${baseUrl}${item.backdrop_path || item.poster_path}` ||
          `${baseUrl}${item.poster_path}`
        }
        width={'100%'}
        height={'56.25%'}
        layout='responsive'
      />
      <h2 className='text-2xl py-1 font-bold transition-all duration-200 ease-linear group-hover:text-white'>
        {item.original_title || item.title || item.original_name}
      </h2>
      <p className='line-clamp-2 mb-[0.2rem] transition-all duration-200 ease-linear group-hover:text-white'>
        {item.overview}
      </p>
      <div className='flex items-center transition-all duration-200 ease-linear group-hover:text-white'>
        <p className='text-md'>{item.release_date || item.first_air_date}</p>
        <p className='mx-2'>•</p>
        <ThumbUpIcon className='h-4 mr-1' />
        <p>{item.vote_count}</p>
      </div>
    </div>
  )
})

export default Item
