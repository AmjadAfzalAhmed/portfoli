import {
  faEnvelope,
  faHeadset,
  faMessage,
  faPaperPlane,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div>
      <section className="contact min-h-[90vh] w-[100vw] border-y-2 flex justify-center py-8">
        <div className="container max-w-[800px] w-[90%] bg-sky-100 sm:w-[80%] md:w-[70%] lg:w-[60%] bg-transparent rounded-2xl shadow-black shadow-lg">
          <div className="head">
            <h2 className="heading text-3xl flex justify-center items-center gap-2 font-semibold">
              <FontAwesomeIcon icon={faHeadset} className="w-6" />
              Contact Me
            </h2>
          </div>
          <div className="content mt-12">
            <form className="w-full px-6 sm:px-12 flex flex-col justify-center items-center">
              <div className="form-group flex flex-col justify-center w-full">
                
                <div className="field flex h-12 items-center relative mb-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute left-3 h-6 w-6 text-black"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full sm:w-[500px] h-12 pl-10 outline-none rounded-md bg-slate-200"
                  />
                </div>

              
                <div className="field flex h-12 items-center relative mb-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 h-6 w-6 text-black"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full sm:w-[500px] h-12 pl-10 outline-none rounded-md bg-slate-200"
                  />
                </div>

                
                <div className="field flex h-12 items-center relative mb-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute left-3 h-6 w-6 text-black"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full sm:w-[500px] h-12 pl-10 outline-none rounded-md bg-slate-200"
                  />
                </div>
                
                <div className="message flex items-center relative mb-4">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="absolute left-3 h-6 w-6 text-black"
                  />
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className="w-full sm:w-[500px] h-14 pl-10 outline-none rounded-md bg-slate-200"
                  ></textarea>
                </div>
              </div>
              
              <div className="button-area mt-6">
                <button
                  type="submit"
                  className="bg-[#2506ad] w-full sm:w-[200px] h-12 text-white text-xl rounded-md shadow-blue-600 shadow-md transition-transform duration-300 hover:bg-[#421cecf5] flex justify-center items-center gap-2"
                >
                  Submit
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
