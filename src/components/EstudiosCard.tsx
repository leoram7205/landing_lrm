import React from "react";
import { EstudiosData } from '../interfaces/EstudiosData';

export const EstudiosCard = ({institution, title, date}:EstudiosData) => {
  return (
    <div className="w-[384px] h-[186px] bg-white rounded-lg border border-[#0C2C4A] shadow-md ">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0C2C4A] ">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-[#0C2C4A] ">{date}</p>
          <p className="mb-3 font-bold text-[#0C2C4A] ">{institution}</p>
        </div>
      </div>
  );
};
