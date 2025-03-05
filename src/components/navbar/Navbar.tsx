import { Menu, X } from "lucide-react";
import { ModeToggleButton } from "../mode-toggle/ModeToggleButton";
import { useState } from "react";
import { Button } from "../ui/button";
import CambodiaIcon from "@/assets/CambodiaIcon";import UkIcon from "@/assets/UkIcon";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [flage, setFlage] = useState(false);
  return (
    <nav className="max-w-[1800px] w-full flex  items-center  justify-between p-5 lg:py-0 bg-primary text-white">
      <div>
        <p>SoPheak</p>
      </div>
      <div>
        <div
          className={`text-foreground h-screen  z-10 absolute top-0 right-0  lg:flex lg:relative  gap-10 lg:h-auto lg:w-auto  transition-all duration-300 overflow-hidden lg:text-white bg-background lg:bg-primary
                        ${collapsed ? "w-0" : "w-[80%]"}`}
        >
          <div className="p-[26px]  flex justify-end lg:hidden ">
            <X
              className="cursor-pointer"
              onClick={() => {
                setCollapsed(true);
              }}
            />
          </div>
          <a
            href="#about"
            className="relative z-10 block p-5  after:bg-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:-z-10 hover:after:w-full after:transition-all after:duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="block p-5 relative z-10  after:bg-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:-z-10 hover:after:w-full after:transition-all after:duration-200"
          >
            Blog
          </a>
          <a
            href="#project"
            className="block p-5 relative z-10 after:bg-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:-z-10 hover:after:w-full after:transition-all after:duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block p-5 relative z-10 after:bg-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:-z-10 hover:after:w-full after:transition-all after:duration-200"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="text-foreground flex items-center gap-5">
        <Button
          onClick={() => {
            setFlage(!flage);
          }}
        >
          {flage ? <CambodiaIcon /> : <UkIcon />}
        </Button>

        <ModeToggleButton />
        <Menu
          className="block lg:hidden text-background"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
