import Link from 'next/link'

export const Navbar = () => {
  return (

    <nav className='bg-red-800 p-4'>
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
          <Link href='/table' className='text-white'>
            でーたてーぶる
          </Link>
        </li>
        <li>
          <Link href='/tabs' className='text-white'>
            たぶ
          </Link>
        </li>
        <li>
          <Link href='/card' className='text-white'>
            かーど
          </Link>
        </li>
      </ul>
    </nav>
  )
}
