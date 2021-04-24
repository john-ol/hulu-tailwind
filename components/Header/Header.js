import Link from 'next/link'
import {
  HomeIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  FolderOpenIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import HeaderOption from './HeaderOption'

function Header() {
  return (
    <header className='flex flex-col space-y-5 justify-center items-center py-6 md:flex-row md:justify-between md:space-x-10 md:space-y-0 '>
      <ul className='flex flex-grow max-w-xl'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={LightningBoltIcon} title='Trending' />
        <HeaderOption Icon={ShieldCheckIcon} title='Verified' />
        <HeaderOption Icon={FolderOpenIcon} title='Collections' />
        <HeaderOption Icon={SearchIcon} title='Search' />
        <HeaderOption Icon={UserIcon} title='Account' />
      </ul>
      <Link href='/'>
        <img
          src='./images/hulu_logo.svg'
          className='cursor-pointer h-[2.5rem] sm:h-[3.2rem]'
        />
      </Link>
    </header>
  )
}

export default Header
