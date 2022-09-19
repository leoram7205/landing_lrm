import React from "react";

export const InicioPage = () => {
  return (
    <>
      <div className="bg-[#0C2C4A] mt-16 w-full h-auto flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row  " >
        <div className="flex flex-col lg:w-1/2 justify-center text-white " >
          <h3 className=" text-white font-bold text-2xl flex justify-center whitespace-normal">Mi nombre es, &nbsp;<span className="italic whitespace-normal"> Leonardo A. Ramírez M. </span></h3>
          <h1 className=" text-4xl text-white w-full pb-10 pt-6 px-20 font-bold text-justify flex justify-center ">Ingeniero de Sistemas con más de 25 años de experiencia en desarrollo de software.</h1>
        </div>
        <div className="py-10 flex flex-col lg:w-1/2 justify-center ">
          <div className="rounded-full flex justify-center mt-10 mb-10">
            <img  className="rounded-full h-80 w-80 " src="./src/assets/foto_perfil.png"  alt="Foto de Perfil LRM" />
            </div>
        </div>
      </div>
    </>
  );
};
