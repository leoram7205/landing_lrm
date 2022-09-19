import React from "react";
import { Link } from "react-scroll";

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-[#0C2C4A] fixed w-full shadow-md shadow-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:justify-between">
            <img className="h-10 w-14" src="./src/assets/LogoLeo.png" alt="Logo LRM" />
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 ml-6 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >Perfil Profesional</a>
            <button
              className="text-white w-12 h-12 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars w-12 h-12"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link smooth spy to="inicio">
                <span className="ml-2 text-white text-xl">
                  Inicio
                </span>
              </Link>
              <Link smooth spy to="perfil">
                <span className="ml-2 text-white text-xl">
                  Perfil
                </span>
              </Link>
              <Link smooth spy to="habilidades">
                <span className="ml-2 text-white text-xl">
                  Habilidades
                </span>
              </Link>
              <Link smooth spy to="portafolio">
                <span className="ml-2 text-white text-xl">
                  Portafolio
                </span>
              </Link>
              <Link smooth spy to="experiencia">
                <span className="ml-2 text-white text-xl">
                  Experiencia
                </span>
              </Link>
              <Link smooth spy to="estudios">
                <span className="ml-2 text-white text-xl">
                  Estudios
                </span>
              </Link>
              <Link smooth spy to="contacto">
                <span className="ml-2 text-white text-xl">
                  Contacto
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


