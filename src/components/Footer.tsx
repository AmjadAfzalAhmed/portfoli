import Link from "next/link";
import {
  faChevronCircleRight,
  faPhone,
  faEnvelope,
  faMapMarked,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const Footer = () => {
  return (
    <div>
      <section className="footer bg-[#00012b] w-full py-12 px-6 md:px-11 border-b-[1px]">
        <div className="box-container flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="box flex-1 min-w-[250px]">
            <h3 className="text-2xl text-white pb-4 font-normal">
              AmjadAfzalAhmed s Portfolio
            </h3>
            <p className="text-xl text-[#ccc] py-[0.7rem]">
              Thank you for visiting my personal portfolio website. <br />
              Connect with me over socials. <br /> <br /> Keep Rising 🚀.
              Connect with me over live chat!
            </p>
          </div>

          <div className="box flex-1 min-w-[250px]">
            <h3 className="text-2xl text-white pb-4 font-normal">
              quick links
            </h3>
            <Link href="#home" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="w-8 h-8 flex text-xl text-[rgb(238,238,238)] py-[0.3rem] hover:text-[#ffae00]"
              />
              home
            </Link>
            <Link href="#about" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="w-8 h-8 flex text-xl text-[rgb(238,238,238)] py-[0.3rem] hover:text-[#ffae00]"
              />
              about
            </Link>
            <Link href="#skills" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="w-8 h-8 flex text-xl text-[rgb(238,238,238)] py-[0.3rem] hover:text-[#ffae00]"
              />
              skills
            </Link>
            <Link
              href="#education"
              className="text-white flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="w-8 h-8 flex text-xl text-[rgb(238,238,238)] py-[0.3rem] hover:text-[#ffae00]"
              />
              education
            </Link>

            <Link
              href="#experience"
              className="text-white flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="w-8 h-8 flex text-xl text-[rgb(238,238,238)] py-[0.3rem] hover:text-[#ffae00]"
              />
              experience
            </Link>
          </div>

          <div className="box flex-1 min-w-[250px]">
            <h3 className="text-2xl text-white pb-4 font-normal">
              contact info
            </h3>
            <p className="text-white flex gap-2 items-center">
              {" "}
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-white" />
              +92 315-240-7725
            </p>
            <p className="text-white flex gap-2 items-center">
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-4 h-4 text-white"
              />
              abhutto2006@gmail.com
            </p>
            <p className="text-white flex gap-2 items-center">
              {" "}
              <FontAwesomeIcon
                icon={faMapMarked}
                className="w-4 h-4 text-white"
              />
              Karachi, Pakistan 75010
            </p>
          </div>

          <div className="share flex-1 min-w-[250px]">
            <h3 className="text-2xl text-white pb-4 font-normal">
              Social Links
            </h3>
            <Link
              href="https://www.linkedin.com/in/amjad-afzal-ahmed-298481283/"
              target="_blank" className="text-white flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-[#e6e6e6] w-10 h-10 p-2"
              /> LinkedIn
            </Link>
            <Link href="https://github.com/AmjadAfzalAhmed" target="_blank" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#e6e6e6] w-10 h-10 p-2"
              /> Github
            </Link>
            <Link href="mailto:abhutto2006@gmail.com" target="_blank" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-[#e6e6e6] w-10 h-10 p-2"
              /> Google
            </Link>
            <Link href="https://twitter.com/" target="_blank" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-[#e6e6e6] w-10 h-10 p-2"
              /> Twitter
            </Link>
            <Link href="https://facebook.com/" target="_blank" className="text-white flex items-center gap-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#e6e6e6] w-10 h-10 p-2"
              /> Facebook
            </Link>
          </div>
        </div>
      </section>
      <h1 className="credit bg-[#00012b] text-white flex gap-2 justify-center items-center py-4">
        Designed with <FontAwesomeIcon icon={faHeart} className="text-red-600 w-8 h-8" /> by Amjad Afzal Ahmed
      </h1>
    </div>
  );
};

export default Footer;
