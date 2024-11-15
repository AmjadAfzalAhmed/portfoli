"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import animated from "/public/animated.jpg";
import cv from "/public/resume.jpg"
import amazon from "/public/amazon.jpg"
import login from "/public/login-page.jpg"
import uni from "/public/university-management.png"
import portfol from "/public/portfolio.jpg"

export default function MyWork() {
  return (
    <main className="relative w-[100vw] h-[1000px] flex flex-col gap-11 shadow-yellow-200 shadow-md">
      <div className="heading">
        <h1 className='text-[50px] text-center font-extrabold drop-shadow-lg text-blue-500'>My Work</h1>
        <h2 className="text-3xl text-green-400 text-center drop-shadow-lg">Demonstration of some projects created, using CLI, HTML / CSS , Next Js</h2>

      </div>

      <div className="slider relative left-[500px] w-[600px] ">

      <Carousel plugins={[Autoplay({ delay: 3000 })]} className='shadow-lg shadow-sky-300'>
        <CarouselContent>
        <CarouselItem>            
            <a href="https://vercel.com/amjad-afzal-ahmeds-projects/portfoli" target="_blank">
            <Image src={portfol} alt="portfolio" className="h-[600px]"/>
            </a>
          </CarouselItem>
          
          <CarouselItem>            
            <a href="https://vercel.com/amjad-afzal-ahmeds-projects/animated-login" target="_blank">
            <Image src={animated} alt="atm" className="h-[600px]"/>
            </a>
          </CarouselItem>
          
          <CarouselItem>            
            <a href="https://github.com/AmjadAfzalAhmed/university-management" target="_blank">
            <Image src={uni} alt="uni" className="h-[600px]"/>
            </a>
          </CarouselItem>
          
          <CarouselItem>            
            <a href="https://vercel.com/amjad-afzal-ahmeds-projects/milestone-2" target="_blank">
            <Image src={cv} alt="cv" className="h-[600px]"/>
            </a>
          </CarouselItem>

          <CarouselItem>            
            <a href="https://vercel.com/amjad-afzal-ahmeds-projects/amazon-clone" target="_blank">
            <Image src={amazon} alt="amazon" className="h-[600px]" />
            </a>                      
          </CarouselItem>

          <CarouselItem>            
            <a href="https://vercel.com/amjad-afzal-ahmeds-projects/html-css-login-signup" target="_blank">
            <Image src={login} alt="login" className="h-[600px]"/>
            </a>
          </CarouselItem>  

        </CarouselContent>
        <CarouselPrevious className='text-blue-500'/>
        <CarouselNext className='text-blue-500'/>
      </Carousel>
      </div>
      <button className="bg-blue-400 shadow-md text-white text-center w-[300px] h-8 rounded-md relative left-[650px]">Click on image to Visit the Link</button>
    </main>
  );
}
