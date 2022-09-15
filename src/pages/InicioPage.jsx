import React from "react";
import { MyCard } from "../components/MyCard";

export const InicioPage = () => {
  return (
    <>
      <div className="bg-[#0C2C4A] h-[673] w-full flex flex-row justify-between">
        <div className=" w-1/2 h-auto text-white text-center flex-column mt-5" >
          <h3 className="text-white text-left ml-4">Leonardo A. Ramírez M.</h3>
          <h2 className="text-white text-left ml-4">Ingeniero de Sistemas con más de 25 años de experiencia en desarrollo de software.</h2>
        </div>
        <div className="w-1/2 h-auto mt-5">
          <img  className="w-30 h-30 align-middle " src="./src/assets/foto_perfil_1.jpg"  alt="Foto de Perfil LRM" />
        </div>
      </div>
    </>
  );
};
