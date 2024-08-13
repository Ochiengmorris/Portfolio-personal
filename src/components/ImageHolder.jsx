import React from "react";
import profile_image from "../assets/profile-img.jpg";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const ImageHolder = ({ imageClassses }) => {
  return (
    <div className="w-full bg-teal-800 bg-opacity-40 py-6 flex flex-col justify-center items-center">
      <div className={` mb-4 lg:mx-4 rounded-full overflow-hidden ${imageClassses}`}>
        <img src={profile_image} className="w-full h-full" alt="My image" />
      </div>

      <div className="flex flex-col items-center gap-1 justify-center mb-4">
        <h3 className="text-xl font-bold tracking-widest">
          JOHN OCHIENG' ODUYA
        </h3>
        <p className="text-lg tracking-wider">Web and App Developer</p>
      </div>

      <div className="flex list-none justify-center gap-8">
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
    </div>
  );
};

export default ImageHolder;
