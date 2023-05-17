import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HomePage } from "../HomePage";
import "tailwindcss/tailwind.css";

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div>
        <nav className="w-full  sticky top-0 left-0 right-0 z-10">
          <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center flex-col justify-between py-3 md:py-5 md:block">
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
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      Nosotros
                    </Link>
                  </li>
                  <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      Blogs
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
                      Contact
                    </Link>
                  </li>
                  <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <HomePage navbar={navbar} />
      </div>
      {/* <ul className={styles.contentNavBar}>
        <li>
          <button className={styles.burguerButton}>BURGUER BUTTON</button>
        </li>

        <li className={styles.navBarTitle}>
          <p className={styles.navBarTitle}>Nosotros</p>
        </li>
        <li className={styles.navBarTitle}>
          <div>
            <img className={styles.image} src="/logo1png.png" alt=""></img>
          </div>
        </li>
        <li className={styles.navBarTitle}>
          <p>Contacto</p>
        </li>
      </ul> */}
    </>
  );
};
