import { useState, useEffect } from "react";
import style from "./Menu.module.css";
import Mobilenav from "../Mobilenav/Mobilenav";
import Hamburger from "hamburger-react";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const [, setIsDesktop] = useState(window.innerWidth > 750);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
      setIsDesktop(window.innerWidth > 750);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.menu}>
      {isMobile ? (
        <>
          <Hamburger color="#ffffff" toggled={isOpen} toggle={setOpen} />
          <Mobilenav isOpen={isOpen} />
        </>
      ) : (
        <ul className={style.ulList}>
          <li className={style.liElement}>home</li>
          <li className={style.liElement}>about me</li>
          <li className={style.liElement}>skills</li>
          <li className={style.liElement}>projects</li>
          <li className={style.liElement}>contact</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
