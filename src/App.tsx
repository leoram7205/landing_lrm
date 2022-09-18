import React from 'react'
import { Navbar } from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { HabilidadesPage } from "./pages/HabilidadesPage";
import { personalData } from "./databases/personalData";
import { EstudiosPage } from './pages/EstudiosPage';
import { ExperienciaPage } from './pages/ExperienciaPage';
import { PortafolioPage } from './pages/PortafolioPage';
import { ContactoPage } from './pages/ContactoPage';

function App() {

  return (
    <>
      <Navbar />
      <section id="inicio" className='bg-[#0C2C4A] h-auto'  >
        <InicioPage />
      </section>
      <section id="perfil" className='h-auto'>
        <PerfilPage profile={personalData.profile}/>
      </section>
      <section id="habilidades" className='h-auto'>
        <HabilidadesPage />
      </section>
      <section id="portafolio" className='h-auto'>
        <PortafolioPage />
      </section>
      <section id="experiencia" >
        <ExperienciaPage />
      </section>
      <section id="estudios" >
        <EstudiosPage />
      </section>
      <section id="contacto" >
        <ContactoPage />
      </section>
    </>
  )
}

export default App
