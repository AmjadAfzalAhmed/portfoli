import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import aboutPic from '/public/image.jpg';
import Image from 'next/image';


const About = () => {
  return (
    <div>
      <section className="about w-full min-h-screen px-4 border-slate-300 border-y-2 md:px-8 lg:px-16 py-12">
        <h2 className="heading text-3xl md:text-4xl text-[#2506ad] font-extrabold flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6 md:w-8 md:h-8 mr-2 text-orange-500" />
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-8">
          {/* Image Section */}
          <div className="image w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src={aboutPic}
              alt="aboutPic"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover object-center"
            />
          </div>

          {/* Content Section */}
          <div className="content w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#0e0e0e] font-extrabold mb-4">
              I am Amjad Afzal Ahmed
            </h2>
            <span className="tag text-xl md:text-2xl text-[#2506ad] font-semibold leading-7 tracking-wider">
              Full Stack Developer
            </span>

            <p className="text-justify text-[#0e0e0e] text-lg md:text-xl font-semibold leading-relaxed mt-4">
              I am a Full-Stack developer based in Karachi, Pakistan. I
              am very passionate about improving my coding skills & developing 
              applications & websites.
              <br /> I build WebApps and Websites. Working for myself to improve
              my skills.
              <br /> Love to build Full-Stack clones too.
            </p>   
            <p className="text-[#2506ad] mt-4">Email:<a href="www.abc.@123.com" className="underline text-black font-semibold ml-4">abhutto2006@gmail.com</a></p> 
            <p className="text-[#2506ad]">Place: <span className="text-black font-semibold ml-4">Karachi, Sindh Pakistan- 75010</span></p> 

            <button className="w-[150px] md:w-[200px] h-[50px] md:h-[60px] bg-[#2506ad] rounded-xl text-white text-lg font-semibold md:text-xl flex justify-center items-center py-2 my-6 mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300 ease-in shadow-blue-700 shadow-md">
              Click Me
              
                <FontAwesomeIcon 
                  icon={faArrowRight}
                  className="w-4 h-4 md:w-6 md:h-6 text-white ml-2 transition-transform duration-300 ease-in hover:translate-x-1"
                />
              
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
