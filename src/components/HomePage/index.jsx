import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import styles from "@/styles/HomePage.module.css";

export const HomePage = ({ navbar, changeLanguaje }) => {
  const [languajes, setLanguajes] = useState({});
  const [title, setTitle] = useState("");

  const sectionRef = useRef(null);

  useEffect(() => {
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
                color: "orange",
                fontSize: "2rem",
                fontWeight: "500",
                margin: "auto",
              }}
            >
              {languajes.from} $10.000
            </span>
          </h3>
          <button
            onClick={handleButtonClick}
            className={`${styles.buttonKnowMore} animate__animated animate__backInDown`}
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

      <div id="about" ref={sectionRef} style={{ marginTop: "600px" }}>
        <h2>Nosotros</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          rerum? Cumque aliquid perspiciatis minima vitae quasi sequi deserunt
          tempore adipisci, libero fugiat, ea repellendus laborum. Vel mollitia
          enim totam illo?
        </p>
      </div>
      <div style={{ marginTop: "600px" }}></div>
    </>
  );
};
