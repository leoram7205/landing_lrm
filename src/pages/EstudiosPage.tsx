import React from 'react'
import { estudiosData } from '../databases/estudiosData';
import { EstudiosCard } from "../components/EstudiosCard";

export const EstudiosPage = () => {
  return (
    <div className=' flex flex-col w-full mt-6 mb-12'>
      <div className='flex pl-10 mb-6'>
          <h1 className='font-bold text-4xl text-[#0C2C4A] '>ESTUDIOS</h1>
      </div>
      <div className=' grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-4 lg:justify-items-center justify-items-center justify-center mb-14 '>
      {estudiosData.map((estudio) => (
        <EstudiosCard 
          key={estudio.id}
          institution={estudio.institution} 
          title={estudio.title} 
          date={estudio.date} 
        />
      ))}
      </div>
    </div>
  )
}
