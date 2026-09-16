import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="border-b border-white/5 bg-n-8/60 backdrop-blur-xl">
        <div className="flex items-center h-16 px-5 lg:px-10">
          <a className="flex items-center gap-2.5 xl:mr-8" href="#hero">
            <span className="flex items-center justify-center w-7 h-7 border border-color-1/50 rounded-md bg-color-1/10 text-color-1 text-sm font-code">
              ⛨
            </span>
            <span className="font-code text-[11px] font-semibold uppercase tracking-[0.14em] text-n-1">
              Cormorant&nbsp;Cyber
            </span>
          </a>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-16 left-0 right-0 bottom-0 bg-n-8/95 backdrop-blur-xl lg:static lg:flex lg:mx-auto lg:bg-transparent lg:backdrop-blur-none`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center gap-2 m-auto lg:flex-row lg:gap-1">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative text-lg text-n-3 transition-colors hover:text-n-1 ${
                    item.url === pathname.hash ? "text-n-1" : ""
                  } px-5 py-3 lg:text-sm lg:px-3 lg:py-2 lg:rounded-full lg:hover:bg-white/5`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <Button
            className="hidden lg:flex ml-auto xl:ml-8"
            href="#contact"
            accent
            px="px-5"
          >
            Contact
          </Button>

          <Button
            onClick={toggleNavigation}
            className="ml-auto lg:hidden"
            px="px-3"
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
