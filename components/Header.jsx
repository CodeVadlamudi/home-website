import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {XMarkIcon, Bars3Icon} from "@heroicons/react/24/outline";

function Header() {
  const Links = [
    {id: 1, name: "Pages", link: "/page"},
    {id: 2, name: "Services", link: "/service"},
    {id: 3, name: "Project", link: "/project"},
    {id: 4, name: "Blog", link: "/blog"},
    {id: 5, name: "Contact", link: "/contact"},
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <header className="px-4 py-4 shadow-sm bg-white sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <a href="/">
          <img
            src="./images/logo.png"
            alt="Logo Image"
            className="h-8 object-contain"
          />
        </a>

        <nav
          className={`flex items-center flex-col justify-center absolute top-16 shadow-sm bg-white border-t w-full space-y-5 p-10 duration-300 lg:flex-row lg:relative lg:w-auto lg:space-y-0 lg:space-x-4 lg:border-none lg:shadow-none lg:top-0 lg:p-0 lg:bg-transparent z-10 ${
            toggle ? "left-0" : "left-[-100%] lg:left-0"
          }`}
        >
          <NavLink
            to="/"
            className={({isActive}) =>
              isActive ? "text-antiqueColor text-lg" : "text-zinc-900 text-lg"
            }
          >
            Home
          </NavLink>
          {Links.map((link) => (
            <NavLink
              to={link.link}
              key={link.id}
              className={({isActive}) =>
                isActive ? "text-lg text-antiqueColor" : "text-zinc-900 text-lg"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button onClick={() => setToggle(!toggle)} className="lg:hidden">
          {toggle ? (
            <XMarkIcon className="w-7 h-7 cursor-pointer" />
          ) : (
            <Bars3Icon className="w-7 h-7 cursor-pointer" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
