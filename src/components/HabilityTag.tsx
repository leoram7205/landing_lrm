import React from 'react'
import { PersonalSkills } from '../interfaces/PersonalSkills';

export const HabilityTag = ( { desc, seniority, image}: PersonalSkills) => {
  return (
    <div className='flex flex-row justify-evenly'>
        <img src={image} className=" mb-4 " />
        <h1 className="mb-6 text-[#0C2C4A] font-bold text-xl">{desc}</h1>
        <h1 className="mb-6 text-[#0C2C4A] font-bold text-xl">{seniority}</h1>
    </div>
  )
}
