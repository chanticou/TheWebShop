import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HomePage } from "../HomePage";
import styles from "@/styles/NavBar.module.css";
import "tailwindcss/tailwind.css";

export const NavBar = () => {
  // Traducciones en diferentes idiomas
  const translations = {
    es: {
      us: "Nosotros",
      blogs: "Blogs",
      contact: "Contacto",
      proyect: "Proyectos",
      design: "Diseño",
      quality: "De calidad al mejor precio del mercado",
      from: "Desde",
      learnMore: "Conoce más",
      customWebsites: "Páginas web personalizadas",
    },
    en: {
      us: "Us",
      blogs: "Blogs",
      contact: "Contact",
      proyect: "Projects",
      design: "Design",
      quality: "Quality at the best market price",

      from: "From",
      learnMore: "Learn more",
      customWebsites: "Custom Websites",
    },
    fr: {
      us: "Nous",
      blogs: "Blogs",
      contact: "Contact",
      proyect: "Projets",
      design: "Conception",
      quality: "De qualité au meilleur prix du marché",

      from: "À partir de",
      learnMore: "En savoir plus",
      customWebsites: "Sites web personnalisés",
    },
  };

  const [navbar, setNavbar] = useState(false);

  const [changeLanguaje, setChangeLanguaje] = useState({
    us: "Nosotros",
    blogs: "Blogs",
    contact: "Contacto",
    proyect: "Proyectos",
    design: "Diseño",
    quality: "De calidad al mejor precio del mercado",
    from: "Desde",
    learnMore: "Conoce más",
    customWebsites: "Páginas web personalizadas",
  });

  const [languaje, setLanguaje] = useState([
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ]);

  const handleChangeLanguaje = (e) => {
    if (languaje) {
      if (e.target.value === "es") {
        setChangeLanguaje(translations.es);
      }
      if (e.target.value === "en") {
        setChangeLanguaje(translations.en);
      }
      if (e.target.value === "fr") {
        setChangeLanguaje(translations.fr);
      }
    }
  };
  // console.log(changeLanguaje);
  return (
    <>
      <div>
        <nav className="w-full  sticky top-0 left-0 right-0 z-10">
          <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}

                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                    onClick={() => setNavbar(!navbar)}
                  >
                    <RxHamburgerMenu
                      width={30}
                      height={30}
                      className="focus:border-none active:border-none"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                  navbar ? "openModal p-12 md:p-0 block z-50" : "hidden"
                }`}
              >
                <ul className="p-0 md:h-auto items-center justify-justify-between md:flex ">
                  <li className="text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    {/* <Link href="#about" onClick={() => setNavbar(!navbar)}> */}
                    {changeLanguaje.us}
                    {/* </Link> */}
                  </li>
                  <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      {changeLanguaje.blogs}
                    </Link>
                  </li>
                  <Link href="/">
                    <Image
                      className="m-auto hidden md:block"
                      src="/logo1png.png"
                      width={150}
                      height={30}
                      alt="logo"
                    />
                  </Link>
                  <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                      {changeLanguaje.contact}
                    </Link>
                  </li>
                  <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      {changeLanguaje.proyect}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                right: "20px",
              }}
            >
              <label style={{ marginRight: "10px" }}>Idioma</label>
              <select
                style={{ backgroundColor: "transparent", cursor: "pointer" }}
                onChange={(e) => handleChangeLanguaje(e)}
              >
                {languaje.map((el) => {
                  return (
                    <option key={el.code} value={el.code}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </nav>
        <HomePage navbar={navbar} changeLanguaje={changeLanguaje} />
      </div>
    </>
  );
};
