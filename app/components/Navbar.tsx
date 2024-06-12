import Link from 'next/link'

export default function Navbar() {
  return (

    <nav className='bg-gray-800 p-4'>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/' className='text-white'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/pages/about' className='text-white'>
            About
          </Link>
        </li>
        <li>
          <Link href='/pages/blog' className='text-white'>
            Blog
          </Link>
        </li>
        <li>
          <Link href='/pages/baseball' className='text-white'>
            Baseball
          </Link>
        </li>
        <li>
          <Link href='/pages/soccer' className='text-white'>
            Soccer
          </Link>
        </li>
      </ul>
    </nav>
    
  )
}
