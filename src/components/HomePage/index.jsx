import { useEffect, useState, useRef } from "react";
import { WaveGenerator } from "../WaveGenerator/index";
import { WavePink } from "../WabePink/index";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import styles from "@/styles/HomePage.module.css";

export const HomePage = ({ navbar, changeLanguaje, nosotrosRef }) => {
  const [languajes, setLanguajes] = useState({});
  const [title, setTitle] = useState("");
  const [showClass, setShowClass] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowClass(true);
    }, 3000); // 3000 milisegundos = 3 segundos
    AOS.init(); // Inicializar la biblioteca AOS
    if (languajes) {
      const titleText = `${changeLanguaje.customWebsites}`;
      let i = 0;
      const intervalId = setInterval(() => {
        setTitle(titleText.substring(0, i));
        i++;
        if (i > titleText.length) {
          clearInterval(intervalId);
        }
        setLanguajes(changeLanguaje);
      }, 100);
    }
  }, [changeLanguaje]);

  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={styles.contentDivs}>
        <div className={styles.divOne}>
          <h2 className={styles.subtitle}>{languajes.design}</h2>
          <h3 className={styles.subtitleDos}>
            {languajes.quality}
            <br />
          </h3>
          <h3
            className={`animate__animated animate__backInDown ${styles.subtitleDos}`}
          >
            <span
              style={{
                textShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.64)",
                color: "orange",
                fontSize: "2rem",
                fontWeight: "500",
                margin: "auto",
                display: "inline-block",
              }}
            >
              {languajes.from} $10.000
            </span>
          </h3>

          <button
            onClick={handleButtonClick}
            className={`${styles.buttonKnowMore} ${
              showClass ? "animate__animated animate__backInDown" : ""
            }`}
          >
            {languajes.learnMore}
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
                alt="background image"
              ></img>
            </div>
          }
        </div>
      </div>
      <div className={styles.waveGenerator}>
        <WaveGenerator />
      </div>
      {/* <div className={styles.fillPink}></div> */}

      <div className={styles.contentBody} id="about" ref={sectionRef}>
        <div className={styles.wabePink}>
          <WavePink />
        </div>
        <div ref={nosotrosRef}></div>
        <div data-aos="fade-left">
          <h2 className={styles.nosotros}>Nosotros</h2>
        </div>
        <div className={styles.contentUs} data-aos="fade-right">
          <p>
            En nuestra empresa, nos especializamos en brindar soluciones de
            diseño y desarrollo web personalizadas. Nos apasiona crear sitios
            web que reflejen la identidad y los objetivos de nuestros clientes,
            ofreciendo una experiencia única para sus visitantes.
          </p>
          <p>
            Contamos con un equipo de profesionales altamente capacitados en
            diseño gráfico, desarrollo web y usabilidad. Utilizamos las últimas
            tecnologías y tendencias para asegurarnos de que cada proyecto
            cumpla con los más altos estándares de calidad.
          </p>
          <p>
            Valoramos la satisfacción del cliente y nos esforzamos por superar
            sus expectativas en cada proyecto. Nuestro enfoque colaborativo nos
            permite comprender las necesidades específicas de cada cliente y
            ofrecer soluciones personalizadas que impulsen su presencia en
            línea.
          </p>
          <p>
            Si estás buscando una empresa confiable y comprometida con la
            excelencia en diseño web, has llegado al lugar indicado. Estamos
            aquí para ayudarte a llevar tu presencia en línea al siguiente nivel
            y hacer que tu marca destaque en el mundo digital.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}></div>
    </>
  );
};
