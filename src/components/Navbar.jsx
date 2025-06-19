import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./NavStyles.css";

import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menu, setmenu] = useState(false);
  return (
    <div className="nav_bar fixed left-0 top-0 h-full">
      <div className="h-full w-16 bg-black text-white flex flex-col justify-between py-4 z-[10000]">
        <div className="flex flex-col items-center">
          <button className="text-2xl mb-4" onClick={() => setmenu(!menu)}>
            {menu ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className="text-vertical mb-4">VIKAS NALLANA</div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/in/vikas-nallana-326314280/"
            target="_blank"
            className="text-vertical"
          >
            LINKEDIN
          </a>
          
          <a
            href="https://www.instagram.com/vikas_nallana/"
            className="text-vertical"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ stiffness: 300 }}
            className="fixed left-16 top-0 h-full bg-[#000000a6] text-white flex flex-col z-[9999] py-3 pt-12"
          >
            <a
              href="#hero_section"
              className="p-3 px-7 tracking-widest hover:bg-[#ffffff1a]"
              onClick={() => setmenu(false)}
            >
              HOME
            </a>
            <a
              href="#about_section"
              className="p-3 px-7 tracking-widest  hover:bg-[#ffffff1a]"
              onClick={() => setmenu(false)}
            >
              ABOUT
            </a>
            <a
              href="#projects_section"
              className="p-3 px-7 tracking-widest  hover:bg-[#ffffff1a]"
              onClick={() => setmenu(false)}
            >
              PROJECTS
            </a>
            <a
              href="#exp_section"
              className="p-3 px-7 tracking-widest  hover:bg-[#ffffff1a]"
              onClick={() => setmenu(false)}
            >
              EXPERIENCE
            </a>
            <a
              href="#contact_section"
              className="p-3 px-7 tracking-widest  hover:bg-[#ffffff1a]"
              onClick={() => setmenu(false)}
            >
              CONNECT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
