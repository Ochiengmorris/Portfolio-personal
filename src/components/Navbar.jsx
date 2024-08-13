import React from "react";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <nav className="flex py-6 px-5 justify-between items-center">
        <h2 className="logo-nav">mjonline.co.ke</h2>

        <div className="flex items-center justify-center">
          <div className="hidden lg:flex ">
            <ul className="list-none gap-2 flex font-semibold items-center justify-center">
              <Link to="#" smooth="true" className="hover:underline cursor-pointer" >HOME</Link>
              <Link to="schedule" smooth="true" className="hover:underline cursor-pointer" >BLOG</Link>
              <Link to="schedule" smooth="true" className="hover:underline cursor-pointer" >SCHEDULE A CALL</Link>
            </ul>
          </div>

          <FaBars
            size={24}
            cursor={"pointer"}
            onClick={toggleSidebar}
            className="ml-4"
          />
        </div>
      </nav>
      <div>
        <div className={`sidebar ${showSidebar ? "show" : ""}`}>
          {showSidebar && (
            <Sidebar
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
