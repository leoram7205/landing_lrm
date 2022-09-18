import React from 'react'
import { HabilityTag } from "../components/HabilityTag";
import { frontSkills } from "../databases/frontSkills";
import { backSkills } from "../databases/backSkills";
import { dataSkills } from "../databases/dataSkills";

export const HabilidadesPage = () => {
    return (
        <div className='bg-[#0C2C4A] w-full flex lg:flex-col md:flex-col sm:flex-col flex-col lg:justify-around sm:content-center'>
            <h1 className='font-bold text-4xl text-white ml-32 mt-20'>HABILIDADES</h1>
            <div className='bg-[#0C2C4A] lg:mb-6 p-6 flex lg:flex-row sm:flex-col md:flex-col flex-col items-center md:content-center sm:content-center content-center lg:items-start lg:justify-around '>
                <div className="mb-6 w-80 bg-white rounded-2xl shadow-md shadow-gray-500">
                    <h1 className="font-bold text-2xl text-center text-[#0C2C4A] mt-4 mb-4">FrontEnd</h1>
                    {frontSkills.map((frontSkill) => (
                        <HabilityTag
                            key={frontSkill.id}
                            desc={frontSkill.desc}
                            seniority={frontSkill.seniority}
                            image={frontSkill.image}
                        />
                    ))}
                </div>
                <div className="mb-6 w-80  bg-white rounded-2xl shadow-md shadow-gray-500">
                    <h1 className="font-bold text-2xl text-center text-[#0C2C4A] mt-4 mb-4">BackEnd</h1>
                    {backSkills.map((backSkill) => (
                        <HabilityTag
                            key={backSkill.id}
                            desc={backSkill.desc}
                            seniority={backSkill.seniority}
                            image={backSkill.image}
                        />
                    ))}
                </div>
                <div className="mb-6 w-80  bg-white rounded-2xl shadow-md shadow-gray-500">
                    <h1 className="font-bold text-2xl text-center text-[#0C2C4A] mt-4 mb-4">DataBase</h1>
                    {dataSkills.map((dataSkill) => (
                        <HabilityTag
                            key={dataSkill.id}
                            desc={dataSkill.desc}
                            seniority={dataSkill.seniority}
                            image={dataSkill.image}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}
