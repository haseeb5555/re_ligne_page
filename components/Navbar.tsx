
import { centerNavLinks, leftSideNavLinks, rightSideNavLinks } from '@/constants'
import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {

  return (
   <nav className='w-full fixed top-0 flex justify-between items-center px-20 py-8 border-b-2 border-slate-200'>
       <ul className='flex justify-center items-center gap-2'>
          {leftSideNavLinks.map((link)=>(
            <Link href={link} className='text-sm text-center' >
                {link}
               
            </Link>
          ))}
       </ul>

            <div className='mt-12'>
                
                 <Logo/>
                </div> 
      
       <ul className='flex justify-center items-center gap-2'>
          {rightSideNavLinks.map((link)=>(
            <Link href={link} className='text-sm text-center'>
                {link}
            </Link>
          ))}
       </ul>
       <div className='absolute top-[85px] -left-6 flex justify-center items-center gap-4 w-full '>
            {
        centerNavLinks.map((link)=>(

              <ul  className=' flex justify-center items-center  '>
                 <Link href={link.url} className='text-sm'>
                    {link.text}
                 </Link>
              </ul>
        ))
            }
        </div>
    
   </nav>
   
  )
}

export default Navbar
