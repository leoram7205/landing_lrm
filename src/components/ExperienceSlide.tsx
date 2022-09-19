import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Experiencias } from '../interfaces/Experiencias'

export const ExperienceSlide = ({id, company, date_from, date_to, position, desc}:Experiencias) => {
    return (
        <Slide index={id}>
            <div className=" flex flex-col flex-shrink-0 relative w-full sm:w-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md shadow-gray-300">
                <div className="p-5">
                    <p className=" text-[#0C2C4A] font-bold text-lg">{company}</p>
                </div>
                <div className="px-5 mb-3">
                    <p className=" text-[#0C2C4A] font-normal text-base">{date_from}  {date_to}</p>
                </div>
                <div className="px-5 mb-3">
                    <p className=" text-[#0C2C4A] font-bold text-base">{position}</p>
                </div>
                <div className="px-5">
                    <p className="mb-3 text-[#0C2C4A] font-normal text-base text-justify">{desc}</p>
                </div>
            </div>
        </Slide>
    )
}
