function HeaderOption({ Icon, title }) {
  return (
    <li className='flex flex-col justify-center items-center cursor-pointer group w-12 transition duration-300 hover:text-white sm:w-full'>
      <Icon className='h-8 group-hover:animate-bounce' />
      <p className='uppercase font-bold tracking-widest opacity-0 transition duration-300 group-hover:opacity-100 '>
        {title}
      </p>
    </li>
  )
}

export default HeaderOption
