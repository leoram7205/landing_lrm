import React from 'react'

export const ContactoPage = () => {
  return (
    <div className=' flex flex-col w-full mt-6 mb-12'>
      <div className='flex pl-10 mb-6'>
          <h1 className='font-bold text-4xl text-white '>CONTACTOS</h1>
      </div>
      <div className='flex flex-row justify-start gap-4'>
        <div className='ml-10'>
          <p className="text-2xl text-white">
            Encuéntrame en:
          </p>
        </div>
        <div className='' >
          <a href="mailto:leoram72@gmail.com" target="_blank" className='flex flex-row'>
            <img src="./src/assets/email-round-icon.svg" alt="Correo electrónico" />
          </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/leonardo-ram%C3%ADrez-m-23637175/" target="_blank" className='w-[38px] h-[38px] flex flex-row'>
            <img src="./src/assets/linkedin.svg" alt="Cuenta Linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}
