import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      glass
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        justify-between
        items-center
        "
      >
        <h1
          className="
          text-2xl
          font-bold
          gradient-text
          "
        >
          Khit.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX size={30} />
          ) : (
            <HiMenu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          md:hidden
          flex
          flex-col
          gap-5
          px-6
          pb-6
          "
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;