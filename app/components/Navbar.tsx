import Link from 'next/link'

export default function Navbar() {
  return (

    <nav className='bg-gray-800 p-4'>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/' className='text-white'>
            Top
          </Link>
        </li>
        <li>
          <Link href='/registration' className='text-white'>
            登録
          </Link>
        </li>
        <li>
          <Link href='/reference' className='text-white'>
            参照
          </Link>
        </li>
        <li>
          <Link href='/soccer' className='text-white'>
            サッカー
          </Link>
        </li>
        <li>
          <Link href='/baseball' className='text-white'>
            野球
          </Link>
        </li>
      </ul>
    </nav>
  )
}
