import React from "react";
import styles from "@/styles/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.contentFooter}>
        <div className={styles.firstLineGrey}></div>
        <div className={styles.contentDivsFooter}>
          <div className={styles.contentLeft}>
            <div data-aos="fade-down-right">FACEBOOCK</div>
            <div data-aos="fade-down-right">INSTAGRAM</div>
          </div>
          <div className={styles.contentRight}>
            <div data-aos="fade-down-left">REDES </div>
            <div data-aos="fade-down-left">SOCIALES</div>
          </div>
        </div>
        <div className={styles.secondLineGrey}></div>
      </div>
    </>
  );
};
