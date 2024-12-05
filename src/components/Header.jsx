import React, { useState } from 'react';
import { logo, menu, close } from '../assets';
import Navbar from './Navbar';
const Header = () => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <header className="fixed top-0 left-0 w-full h-20 items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 mt-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/">
            <img height={40} width={40} src={logo} alt="" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <img src={navOpen ? close : menu} alt="" />
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
