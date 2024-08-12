import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import ImageHolder from "./ImageHolder";
import { Link } from "react-scroll";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`bg-gray-100 h-screen shadow-md z-50`}>
      <button className="py-6 px-5" onClick={() => setShowSidebar(false)}>
        <IoMdCloseCircle size="28" />
      </button>

      <ul className="list-none lg:hidden px-2 gap-2 flex flex-col font-semibold">
        <li className="hover:bg-gray-200 rounded overflow-hidden">
          <Link to="home" smooth="true" offset={-30} className="block px-4 py-4 hover:underline cursor-pointer">
            HOME
          </Link>
        </li>
        <li className="hover:bg-gray-200 rounded overflow-hidden">
          <a href="#" className="block px-4 py-4 hover:underline cursor-pointer">
            BLOG
          </a>
        </li>
        <li className="hover:bg-gray-200 rounded overflow-hidden">
          <Link to="schedule" smooth="true" className="block px-4 py-4 hover:underline cursor-pointer">
            SCHEDULE A CALL
          </Link>
        </li>
        <li className="hover:bg-gray-200 rounded overflow-hidden">
          <a href="#" className="block px-4 py-4 hover:underline cursor-pointer">
            CONTACT ME
          </a>
        </li>
      </ul>

      <div className="p-1 mt-2">
        <ImageHolder imageClassses={'mx-8'}/>
      </div>
    </div>
  );
};

export default Sidebar;
