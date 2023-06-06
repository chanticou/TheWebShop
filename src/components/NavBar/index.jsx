import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HomePage } from "../HomePage";
import { Footer } from "../Footer";
import styles from "@/styles/NavBar.module.css";
import "tailwindcss/tailwind.css";

export const NavBar = () => {
  const nosotrosRef = useRef(null);
  const solutionsRef = useRef(null);
  const contactoRef = useRef(null);

  // Traducciones en diferentes idiomas
  const translations = {
    es: {
      us: "Nosotros",
      solutions: "Soluciones",
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
      solutions: "solutions",
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
      solutions: "solution",
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
    solutions: "Soluciones",
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

  return (
    <>
      <div>
        <nav className="w-full fixed top-0 left-0 right-0 z-10">
          <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex fixed items-center justify-between py-3 md:py-5 md:block">
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
                  navbar ? "openModal p-12 md:p-0 block z-50 " : "hidden"
                }`}
              >
                <ul className="p-0 md:h-auto items-center justify-justify-between md:flex ">
                  <div className={styles.contentLi}>
                    <li
                      className="text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent text-gray-900"
                      onClick={() => {
                        nosotrosRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      <div data-aos="fade-right">{changeLanguaje.us}</div>
                    </li>
                  </div>
                  <div className={styles.contentLi}>
                    <li
                      className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent text-gray-900"
                      onClick={() => {
                        solutionsRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      <div data-aos="fade-right">
                        {changeLanguaje.solutions}
                      </div>
                    </li>
                  </div>

                  <Image
                    className="m-auto hidden md:block"
                    src="/logo1png.png"
                    width={150}
                    height={30}
                    alt="logo"
                  />

                  <div className={styles.contentLi}>
                    <li
                      className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent text-gray-900"
                      onClick={() => {
                        contactoRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      <div data-aos="fade-left">{changeLanguaje.contact}</div>
                    </li>
                  </div>
                  <div className={styles.contentLi}>
                    <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent text-gray-900">
                      <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                        <div data-aos="fade-left">
                          <div className={styles.contentLanguaje}>
                            <label>Idioma</label>
                            <select
                              style={{
                                backgroundColor: "transparent",
                                cursor: "pointer",
                              }}
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
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <HomePage
          navbar={navbar}
          changeLanguaje={changeLanguaje}
          nosotrosRef={nosotrosRef}
          solutions={solutionsRef}
        />
        <Footer contactoRef={contactoRef} />
      </div>
    </>
  );
};
