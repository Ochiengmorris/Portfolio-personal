import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import HeaderLinks from "../components/HeaderLinks";
import cv from "../assets/cv.pdf";
import { IoShareSocialSharp } from "react-icons/io5";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Interests from "../components/Interests";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import PortfolioComp from "../components/PortfolioComp";
import Form from "../components/Form";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 560) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pb-8 lg:px-4 w-full lg:bg-gray-800 lg:bg-opacity-20 tracking-wider">
      <div className="max-w-[1100px] mx-auto relative">
        <div className="flex">
          <div className="lg:block hidden relative mr-4 mt-[104px] w-[2880px]">
            {/* don't even ask how that width works but it works */}
            <div className=" bg-white bg-opacity-60 shadow-xl  fixed top-[72px]">
              <ImageHolder imageClassses={"w-[300px] h-[300px]"} />

              <div className="my-12 text-center ">
                <a
                  href={cv}
                  download
                  className="px-8 py-3 rounded-full font-bold bg-black text-white "
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
          <div>
            <Navbar />

            <div className="lg:hidden">
              <HeaderLinks mediaClasses={"flex bg-gray-100"} />
            </div>

            <div className="lg:hidden mb-20 ">
              <ImageHolder imageClassses={"w-[200px] h-[200px]"} />

              <div className="my-12 text-center ">
                <a
                  href={cv}
                  download
                  className="px-8 py-3 rounded-full font-bold bg-black text-white "
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            <div
              className="lg:flex lg:flex-col lg:gap-2 shadow lg:shadow-lg rounded"
              id="home"
            >
              <div className="lg:bg-white lg:bg-opacity-60">
                <div className="px-5 mt-4">
                  <h1 className="text-4xl font-bold mb-12 text-gray-800">
                    HI, I'M JOHN.
                  </h1>
                  <p className="text-xl text-gray-600 ">
                    Hello There! I'm <b>John Oduya</b>. A{" "}
                    <b>Mobile and Web Developer</b> with a passion for creating
                    visually stunning, highly functional digital experiences
                    across platforms, from responsive websites to intuitive
                    mobile applications. My expertise spans frontend and backend
                    web technologies like <b>HTML, CSS, JavaScript, React,</b>{" "}
                    and <b>Node.js</b>, as well as mobile technologies like{" "}
                    <b>Flutter</b> and <b>React-Native</b>, with <b>2+ years</b>{" "}
                    experience in software Development. Whether building a
                    dynamic website or a seamless mobile app, I’m dedicated to
                    delivering high-quality, scalable solutions that exceed
                    client expectations and delight users.
                  </p>
                </div>

                <div className="px-5 mt-12 mb-6">
                  <button className="flex gap-1 items-center hover:shadow-lg border border-gray-500 px-6 py-1 rounded-full">
                    <IoShareSocialSharp />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>

              <div className="lg:py-4 lg:bg-white lg:bg-opacity-60" id="skill">
                <Skills />
              </div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="py-4 lg:bg-white mb-8 lg:mb-0 border-t lg:bg-opacity-60 px-5"
              >
                <h2 className="text-4xl font-semibold mb-8" id="work">
                  Work Experience
                </h2>

                <WorkExperience
                  date="Jan 2023 – To Date"
                  title="SENIOR FLUTTER MOBILE APPS DEVELOPER"
                  company="Spraxa Solutions Pvt Ltd"
                  details={[
                    "Led and significantly contributed to the successful completion of a crucial project, showcasing leadership, problem-solving, and collaboration skills",
                    "Spearheaded the migration of a native app to Flutter, introducing cross-platform efficiency and maintaining a consistent user experience.",
                    "Conducted thorough code reviews to ensure adherence to coding standards and took charge of ongoing maintenance for optimal application performance.",
                    "// This is mock data",
                  ]}
                />

                {/* Education */}
                <h2 className="text-4xl font-semibold mb-8" id="education">
                  Education
                </h2>

                <WorkExperience
                  date="Jan 2021 – Dec 2024"
                  title="BACHELOR'S DEGREE, MATHEMATICS & STATISTICS"
                  company="Moi University - Eldoret, Kenya"
                />
              </motion.div>

              <div className=" lg:bg-white py-4 mb-8 lg:mb-0 lg:bg-opacity-60 px-5">
                <h2 className="text-4xl font-semibold mb-8" id="interests">
                  INTERESTS
                </h2>

                <div>
                  <Interests />
                </div>
              </div>

              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 20 }}
                transition={{ duration: 1 }}
                className=" lg:bg-white py-4 lg:bg-opacity-60 px-5 "
                id="schedule"
              >
                <h2 className="text-4xl font-semibold mb-8">BOOK A MEETING</h2>

                <div className="text-center">
                  <p className="text-xl text-gray-600 tracking-wide">
                    Whether the app development has just begun or the
                    development has reached a certain milestone, I can
                    effectively join your side within short period of time. Get
                    in touch with me & lets discuss your project.
                  </p>

                  <div className="my-12 text-center ">
                    <a
                      href={"#"}
                      className="px-8 py-3 rounded-full font-bold bg-[#76c7c0] text-black "
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 20 }}
                transition={{ duration: 1 }}
                className=" lg:bg-white py-4 border-t lg:bg-opacity-60 px-5"
              >
                <h2 className="text-4xl font-semibold mb-8">PORTFOLIO</h2>
                {/* portfolio */}
                <div>
                  <PortfolioComp />
                </div>
              </motion.div>

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className=" lg:bg-white py-4 border-t lg:bg-opacity-60 px-5"
                id="contact"
              >
                <h2 className="text-4xl font-semibold mb-8">CONTACT ME</h2>

                <div className="lg:mx-12">
                  <div className="flex list-none gap-8 mb-6">
                    <li>
                      <a href="#">
                        <FaSquareFacebook size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagramSquare size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/johnochieng/">
                        <FaLinkedin size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/oduyajohn66">
                        <FaXTwitter size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/OchiengMorris">
                        <FaSquareGithub size={24} />
                      </a>
                    </li>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-500">
                    Feel free to contact me in case of any question
                  </h2>
                  {/* do a form using htmlto */}
                  <Form />
                </div>
              </motion.div>
            </div>

            <div className="lg:bg-white border-t lg:bg-opacity-60 p-1 mt-2 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.630222684098!2d39.554922611045896!3d-4.28656423099751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184045f950371c63%3A0xdd0680f05b13c443!2sUkunda!5e0!3m2!1sen!2ske!4v1723493496830!5m2!1sen!2ske"
                // width="full"
                height="450"
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {show && (
              <div className="fixed bottom-3 right-2 bg-green-800 bg-opacity-40 rounded-full overflow-hidden">
                <button
                  className="p-3 "
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <BiArrowToTop size={24} />
                </button>
              </div>
            )}
          </div>
          <div className="lg:block hidden mt-[52px]">
            <HeaderLinks mediaClasses={"flex flex-col"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
