import React from 'react'
import { ProjectCard } from '../components/ProjectCard';
import { personalProyects } from "../databases/personalProjects";

export const PortafolioPage = () => {
  return (
    <div className='flex flex-col w-full mt-6'>
      <div className='flex pl-28 mb-6'>
        <h1 className='font-bold text-4xl text-[#0C2C4A] '>PORTAFOLIO</h1>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2  gap-4 lg:justify-items-center justify-items-center justify-center  '>
      {personalProyects.map((project) => (
        <ProjectCard 
          key={project.id}
          desc={project.desc} 
          name={project.name} 
          image={project.image} 
          url_preview={project.url_preview} 
          url_github={project.url_github}
        />
      ))}
      </div>
    </div>

  )
}
