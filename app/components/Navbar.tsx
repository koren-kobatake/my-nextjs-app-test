import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-gray-800 p-4'>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/' legacyBehavior>
            <a className='text-white'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            <a className='text-white'>About</a>
          </Link>
        </li>
        <li>
          <Link href='/blog' legacyBehavior>
            <a className='text-white'>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/baseball' legacyBehavior>
            <a className='text-white'>Baseball</a>
          </Link>
        </li>
        <li>
          <Link href='/soccer' legacyBehavior>
            <a className='text-white'>Soccer</a>
          </Link>
        </li>
      </ul>
    </nav>
    
  )
}
