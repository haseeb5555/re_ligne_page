import React from 'react'

type StepCardProps = {
    stepNumber:number,
    stepDescription:string;
    instructions:string;
}
const StepCard = ({stepNumber,stepDescription,instructions}:StepCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 shadow-2xl px-8 py-4 rounded-2xl'>
        <h1>{stepNumber}</h1>
        <p><span className="font-bold">{stepDescription}</span></p>
        <p>{instructions}</p>
    </div>
  )
}

export default StepCard
