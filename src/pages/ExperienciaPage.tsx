import React, { useState } from "react";
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ExperienceSlide } from '../components/ExperienceSlide';
import { experiencias } from "../databases/experiencias";

export const ExperienciaPage = () => {
    return (
        <div className="container mx-auto">
        <div className='bg-[#0C2C4A] flex flex-col w-full mt-6 mb-12'>
            <div className='flex pl-28 mb-6'>
                <h1 className='font-bold text-4xl text-white '>EXPERIENCIA</h1>
            </div>
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={2} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={12} height={18} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="#0C7C9A" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full ml-10 mx-auto ">
                        <Slider>
                            <div id="slider" className="h-full ml-10 flex lg:gap-8 md:gap-6 gap-14 content-start ">
                                {experiencias.map((experiencia)=>(
                                    <ExperienceSlide
                                        key={experiencia.id}
                                        company={experiencia.company}
                                        date_from={experiencia.date_form}
                                        date_to={experiencia.date_to}
                                        position={experiencia.position}
                                        desc={experiencia.desc}
                                    />
                                ))}
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={12} height={18} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#0C7C9A" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>

            {/* Carousel for tablet and medium size devices */}
            <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={12} height={18} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="#0C7C9A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full ml-10 mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 content-start  transition ease-out duration-700">
                                {experiencias.map((experiencia)=>(
                                    <ExperienceSlide
                                        key={experiencia.id}
                                        company={experiencia.company}
                                        date_from={experiencia.date_form}
                                        date_to={experiencia.date_to}
                                        position={experiencia.position}
                                        desc={experiencia.desc}
                                    />
                                ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={12} height={18} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="#0C7C9A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={12} height={18} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="#0C7C9A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full ml-20 mx-auto flex items-center overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 content-start transition ease-out duration-700">
                                {experiencias.map((experiencia)=>(
                                    <ExperienceSlide
                                        key={experiencia.id}
                                        company={experiencia.company}
                                        date_from={experiencia.date_form}
                                        date_to={experiencia.date_to}
                                        position={experiencia.position}
                                        desc={experiencia.desc}
                                    />
                                ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={12} height={18} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="#0C7C9A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
        </div>
        </div>
    )
}
