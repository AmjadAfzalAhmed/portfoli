import Link from "next/link";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import prof from '/public/prof.jpg';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around md:gap-12 px-4 sm:px-8 lg:px-16">
      <section className="relative flex flex-col items-start mt-16 md:min-h-[90vh] md:w-[50%] lg:w-[60%]">
        <div className="content w-full mt-[150px] pl-24 md:w-auto pt-4 z-[1]">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#002057] font-extrabold">
            Hi There,
            <br /> I am Amjad Afzal <br />
            <span className="text-2xl sm:text-4xl lg:text-5xl text-[#ff7b00] font-extrabold">
              Ahmed
            </span>
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl text-[#000] font-semibold mt-2">
            Full Stack Developer <span className="typing-text"></span>
          </p>
          <a className="btn flex justify-center items-center bg-[#2506ad] mt-4 py-2 rounded-full shadow-lg transition duration-500 ease-in text-white text-center text-base sm:text-lg cursor-pointer hover:bg-[#1a047e] w-36">
  <span className="font-bold">Hire Me</span>
  <FontAwesomeIcon
    icon={faArrowCircleDown}
    className="w-4 h-4 ml-2 transition ease-in duration-300 hover:translate-x-1"
  />
</a>

          {/* Social Icons */}
          <div className="socials mt-16">
            <ul className="flex gap-2">
              <li>
                <Link href="https://www.linkedin.com/in/amjad-afzal-ahmed-298481283/" target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="bg-[#09011b] text-[#00d9ff] w-10 h-10 p-2 rounded-full hover:bg-[#007bb6] hover:text-white"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/AmjadAfzalAhmed" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="bg-[#09011b] text-[#00d9ff] w-10 h-10 p-2 rounded-full hover:bg-[#0e0e0e] hover:text-white"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="bg-[#09011b] text-[#00d9ff] w-10 h-10 p-2 rounded-full hover:bg-[#00aced] hover:text-white"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="bg-[#09011b] text-[#00d9ff] w-10 h-10 p-2 rounded-full hover:bg-[#ee00da] hover:text-white"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="bg-[#09011b] text-[#00d9ff] w-10 h-10 p-2 rounded-full hover:bg-[#00aced] hover:text-white"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="image-section w-full md:w-[40%] lg:w-[40%] flex justify-center mt-8 md:mt-0">
        <Image
          src={prof}
          alt="profile-pic"
          className="w-40 h-40 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] lg:mt-20 rounded-full border-4 border-[#fc8c05] shadow-lg transition-transform duration-400 ease-in hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
