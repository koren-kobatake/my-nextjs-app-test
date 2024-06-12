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
          <Link href='/about' className='text-white'>
            About
          </Link>
        </li>
        <li>
          <Link href='/blog' className='text-white'>
            Blog
          </Link>
        </li>
        <li>
          <Link href='/baseball' className='text-white'>
            Baseball
          </Link>
        </li>
        <li>
          <Link href='/soccer' className='text-white'>
            Soccer
          </Link>
        </li>
      </ul>
    </nav>
    
  )
}
