import React, { useState } from "react";
import { images } from "../constant";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/user";
import { Link, useNavigate } from "react-router-dom";

const NavItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "Abot us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "FaQ", type: "link", href: "/faq" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((currentState) => {
      return !currentState;
    });
  };

  return (
    <li className=" relative group">
      {item.type === "link" ? (
        <>
          {" "}
          <Link to={item.href} className="px-4 py-2 ">
            {item.name}
          </Link>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center ">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDropDown, setProfilDropDown] = useState(false);

  const navIsVisibilityHandler = () => {
    setNavIsVisible((currentState) => {
      return !currentState;
    });
    console.log(navIsVisible);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/">
          <img className="w-16" src={images.Logo} alt="Logo" />
        </Link>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navIsVisibilityHandler}
            />
          ) : (
            <IoMenu className="w-6 h-6" onClick={navIsVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full "
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center ">
                  <button
                    className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 rounded-full text-blue-500 font-semibold
             px-6 py-2 hover:bg-blue-500 hover:text-white transition-all duration-100"
                    onClick={() => setProfilDropDown(!profileDropDown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDropDown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState?.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                        >
                          Admin Dashboard
                        </button>
                      )}
                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Log Out
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className=" mt-5 lg:mt-0 border-2 border-blue-500 rounded-full text-blue-500 font-semibold
              px-6 py-2 hover:bg-blue-500 hover:text-white transition-all duration-100 "
            >
              Sign in
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
