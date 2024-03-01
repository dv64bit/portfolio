import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`fixed z-[99999] w-full px-12 py-2 flex items-center justify-between bg-[#f1f1f1] bg-opacity-5 backdrop-blur-[4px] transition-all duration-300 ${
        visible ? "top-0" : "-top-full"
      }`}
    >
      <a href="/" className="logo">
        <img src="/logo.svg" className="w-16 h-16" alt="Website Logo" />
      </a>

      <div className="links flex gap-8">
        {["Services", "My work", "About me", "Projects", "Contact me"].map(
          (listItems, index) => (
            <a
              href={`#${listItems}`}
              key={index}
              className={`text-lg font-NeueMontreal ${index === 4 && "ml-60"} ${
                visible
                  ? "text-stone-200 hover:text-stone-300"
                  : "text-white hover:text-gray-100"
              }`}
            >
              {listItems}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
