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
import cv from "/public/resume.jpg";
import amazon from "/public/amazon.jpg";
import login from "/public/login-page.jpg";
import uni from "/public/university-management.png";
import portfol from "/public/portfolio.jpg";

export default function MyWork() {
  return (
    <main className="relative w-full h-auto flex flex-col gap-8 p-4 shadow-yellow-200 shadow-md">
      <div className="heading">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold drop-shadow-lg text-blue-500">
          My Work
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl text-green-400 text-center drop-shadow-lg">
          Demonstration of some projects created, using CLI, HTML / CSS, Next.js
        </h2>
      </div>

      <div className="slider mx-auto w-full max-w-4xl">
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className="shadow-lg shadow-sky-300"
        >
          <CarouselContent>
            <CarouselItem>
              <a
                href="https://vercel.com/amjad-afzal-ahmeds-projects/portfoli"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={portfol}
                  alt="portfolio"
                  className="h-auto max-h-[600px] w-full object-cover"
                />
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://vercel.com/amjad-afzal-ahmeds-projects/animated-login"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={animated}
                  alt="atm"
                  className="h-auto max-h-[600px] w-full object-cover"
                />
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://github.com/AmjadAfzalAhmed/university-management"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={uni}
                  alt="uni"
                  className="h-auto max-h-[600px] w-full object-cover"
                />
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://vercel.com/amjad-afzal-ahmeds-projects/milestone-2"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={cv}
                  alt="cv"
                  className="h-auto max-h-[600px] w-full object-cover"
                />
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://vercel.com/amjad-afzal-ahmeds-projects/amazon-clone"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={amazon}
                  alt="amazon"
                  className="h-auto max-h-[600px] w-full object-cover"
                />
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://vercel.com/amjad-afzal-ahmeds-projects/html-css-login-signup"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={login}
                  alt="login"
                  className="h-auto max-h-[600px] w-full object-cover"
                />
              </a>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-500" />
          <CarouselNext className="text-blue-500" />
        </Carousel>
      </div>

      <p className="bg-blue-400 shadow-md text-white text-center mx-auto w-full max-w-xs p-2">
        Click on the image to visit the link
      </p>
    </main>
  );
}
