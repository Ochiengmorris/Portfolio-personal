import React from "react";

import { GoFileMedia } from "react-icons/go";
import { IoBriefcaseOutline, IoMailOutline } from "react-icons/io5";
import { BsChatLeftQuote, BsInfoSquare } from "react-icons/bs";
import { GiLeafSkeleton } from "react-icons/gi";
import { Link } from "react-scroll";

const HeaderLinks = ({ mediaClasses }) => {
  return (
    <div
      className={`list-none ${mediaClasses} gap-4 md:gap-10 justify-center items-center p-5`}
    >
      <li>
        <Link to="home" smooth="true" offset={-15} className="cursor-pointer">
          <BsInfoSquare size={32} />
        </Link>
      </li>
      <li>
        <Link to="skill" smooth="true" offset={-20} className="cursor-pointer">
          <GoFileMedia size={32} />
        </Link>
      </li>
      <li>
        <Link to="work" smooth="true" offset={-20} className="cursor-pointer">
          <IoBriefcaseOutline size={32} />
        </Link>
      </li>
      <li>
        <Link to="education" smooth="true" offset={-20} className="cursor-pointer">
          <BsChatLeftQuote size={32} />
        </Link>
      </li>
      <li>
        <Link to="interests" smooth="true" offset={-20} className="cursor-pointer">
          <GiLeafSkeleton size={32} />
        </Link>
      </li>
      <li>
        <Link to="contact" smooth="true" className="cursor-pointer">
          <IoMailOutline size={32} />
        </Link>
      </li>
    </div>
  );
};

export default HeaderLinks;
