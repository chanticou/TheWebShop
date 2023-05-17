import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "aos/dist/aos.css";
import { useRef } from "react";
import styles from "@/styles/HomePage.module.css";

export const HomePage = ({ navbar }) => {
  const [title, setTitle] = useState("");
  const titleText = `PAGINAS WEB PERSONALIZADAS`;
  const sectionRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTitle(titleText.substring(0, i));
      i++;
      if (i > titleText.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }, []);

  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className={styles.contentDivs}>
        <div className={styles.divOne}>
          <h2 className={styles.subtitle}>Diseño</h2>
          <h3 className={styles.subtitleDos}>
            De calidad y al mejor precio del mercado
            <br />
          </h3>
          <h3
            className={`animate__animated animate__backInDown ${styles.subtitleDos}`}
          >
            <span
              style={{
                color: "orange",
                fontSize: "2rem",
                fontWeight: "500",
                margin: "auto",
              }}
            >
              Desde $10.000
            </span>
          </h3>
          <button
            onClick={handleButtonClick}
            className={`${styles.buttonKnowMore} animate__animated animate__backInDown`}
          >
            Conocé más
          </button>
        </div>

        <div className={`${styles.divTwo}`}>
          {
            <div className={`mt-8 ${navbar ? "hidden" : ""}`}>
              <h1 className={`${styles.title} animate__backInDown`}>
                {title}
                <span className={styles.cursor}></span>
              </h1>
              <img
                className={styles.imageBackground}
                src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1683921343/pexels-lumn-399161_yjj5s4.jpg"
                alt="backgorund image"
              ></img>
            </div>
          }
        </div>
      </div>

      <div ref={sectionRef} style={{ marginTop: "1000px" }}>
        Sección hacia la que se desplazará
      </div>
    </>
  );
};
