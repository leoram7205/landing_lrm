import React from 'react'

export const ContactoPage = () => {
  return (
    <div className=' flex flex-col w-full mt-6 mb-12'>
      <div className='flex pl-10 mb-6'>
          <h1 className='font-bold text-4xl text-white '>CONTACTOS</h1>
      </div>
      <div className='p-6 flex-row'>
        <p className="p-6 text-2xl text-white">
          Encuéntrame en:
        </p>
        <div className='flex flex-row ' >
          <a href="mailto:leoram72@gmail.com" target="_blank">
            <img src="./assets/email-round-icon.svg" alt="Correo electrónico" />
            <p className='text-xl text-white' >leoram72@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  )
}
