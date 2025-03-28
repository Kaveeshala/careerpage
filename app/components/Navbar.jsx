import Link from 'next/link'
import Dropdown from '../widgets/Dropdown'


export default function Navbar() {

  const navLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/'
  },
  {
    name: 'Contact us',
    link: '/'
  },
  
]
  return (
    <div className='mx-auto max-w-7xl mt-8 bg-white'>
      <nav className='flex justify-between'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className=' text-black text-3xl font-semibold'>Careers</h1>
          <div className='flex gap-8'>
          <div className='flex gap-8 items-center text-black text-base'>
            
            {navLinks.map((link, index) => (
              <Link href={link.link} key={index} className='hover:underline'>{link.name}</Link>

            ))}
            <Dropdown />
           
          </div>
          <button className='border border-black rounded-full px-4 py-1 hover:cursor-pointer hover:scale-105 hover:bg-gray-300 active:scale-90 transition-transform duration-200'>
              Sign up
            </button>
            </div>
        </div>
      </nav>
      <hr className='my-6 w-full mx-auto border-gray-300' />
    </div>
    
  )
}