import React from "react";
import Image from 'next/image';
import ts from '/public/ts.png';
import tw from '/public/tailwind.png';
import htm from '/public/html.png';
import nxj from '/public/nextjs.png';
import react from '/public/react.png';
import ps from '/public/pshop.png';

const Skills = () => {
  return (    
    <div className="bg-white w-full min-h-[90vh] px-4 md:px-8 lg:px-16 py-12 border-b-2 border-yellow-200 ">    
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500 text-center bg-transparent mb-8 hover:scale-105 transition-transform duration-300">Skills I Have</h1> 
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto text-lg text-blue-600">
        
        {/* Skill Card - TypeScript */}
        <div className="bg-sky-500 w-full h-[300px] flex flex-col items-center justify-center rounded-lg text-[#ccc] text-xl shadow-sky-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in">
          <span className="bg-yellow-200 ring ring-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>1</span>
          </span>
          <h3 className="text-2xl text-yellow-300 mt-2">Typescript</h3>
          <Image src={ts} alt="ts-icon" width={50} height={50} className="rounded-md" />
          <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Skill Card - HTML/CSS */}
        <div className="bg-yellow-500 w-full h-[300px] flex flex-col items-center justify-center rounded-lg text-[#ccc] text-xl shadow-yellow-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in">
          <span className="bg-blue-300 ring ring-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>2</span>
          </span>
          <h3 className="text-2xl text-blue-300 mt-2">HTML / CSS</h3>
          <Image src={htm} alt="html-icon" width={100} height={100} className="rounded-md" />
          <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Skill Card - Tailwind CSS */}
        <div className="bg-red-500 w-full h-[300px] flex flex-col items-center justify-center rounded-lg text-[#ccc] text-xl shadow-red-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in">
          <span className="bg-green-300 ring ring-green-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>3</span>
          </span>
          <h3 className="text-2xl text-green-400 mt-2">Tailwind CSS</h3>
          <Image src={tw} alt="tailwind" width={100} height={100} className="rounded-md" />
          <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Skill Card - Next JS */}
        <div className="bg-green-500 w-full h-[300px] flex flex-col items-center justify-center rounded-lg text-[#ccc] text-xl shadow-green-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in">
          <span className="bg-blue-300 ring ring-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>4</span>
          </span>
          <h3 className="text-2xl text-red-400 mt-2">Next JS</h3>
          <Image src={nxj} alt="nextjs" width={100} height={100} className="rounded-md" />
          <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Skill Card - React JS */}
        <div className="bg-purple-500 w-full h-[300px] flex flex-col items-center justify-center rounded-lg text-[#ccc] text-xl shadow-purple-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in">
          <span className="bg-yellow-300 ring ring-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>5</span>
          </span>
          <h3 className="text-2xl text-yellow-400 mt-2">React JS</h3>
          <Image src={react} alt="reactjs" width={100} height={100} className="rounded-md" />
          <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Skill Card - Photoshop */}
        <div className="bg-white w-full h-[300px] flex flex-col items-center justify-center rounded-lg text-[#ccc] text-xl shadow-green-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in">
          <span className="bg-gray-500 ring ring-slate-400 rounded-full w-12 h-12 flex items-center justify-center">
            <span>6</span>
          </span>
          <h3 className="text-2xl text-red-400 mt-2">Photoshop</h3>
          <Image src={ps} alt="photoshop" width={100} height={100} className="rounded-md" />
          <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
