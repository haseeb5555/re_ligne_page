import { stepsArray } from '@/constants'
import Image from 'next/image'
import React from 'react'
import StepCard from './StepCard'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-8 '>
      
      <Image
       src="/hero.webp"
       alt='hero background'
        width={1400}
        height={200}
       className='mt-[116px] object-contain '
      />
       

        <h1 className='font-semibold text-2xl'>How it Works</h1>
      <div className='flex justify-start items-center  gap-4 px-20 py-8'>
        {
            stepsArray.map((step)=>(
                <StepCard key={step.stepNumber} 
                stepNumber={step.stepNumber}
                stepDescription={step.stepDescription}
                instructions={step.instructions}
                />
            ))
        }
      </div>
       
    </section>
  )
}

export default Hero
