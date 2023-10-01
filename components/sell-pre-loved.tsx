import Image from 'next/image'
import React from 'react'

const PreLoved = () => {
  return (
    <section className='w-full flex justify-start items-start '>
             <div  className='w-1/2'>
                <Image
                  src="/leftImage.webp"
                  alt='left Image'
                  width={700}
                  height={500}
                  className='object-contain'
                />
             </div>
             <div className='bg-black w-1/2 h-[762px] flex justify-center items-center '>
                 <div className='px-60 py-80 hover:border-white hover:border text-white flex justify-center items-center'>

                    <p> Pre-Loved La ligne</p>

                 </div>
             </div>
    </section>
  )
}

export default PreLoved
