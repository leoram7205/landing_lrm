import React from 'react'
import { PersonalData } from '../interfaces/PersonalData';

export const PerfilPage = ({profile}:PersonalData) => {
  return (
    <div className='felx flex-row mt-6'>
      <div className='flex pl-28'>
        <h1 className='font-bold text-4xl text-[#0C2C4A] '>PERFIL PROFESIONAL</h1>
      </div>
      <div className='flex pt-10 px-28 mb-6'>
        <p className=' text-[#0C2C4A] text-xl text-justify'>{profile}</p>
      </div>
    </div>
  )
}
