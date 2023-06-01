import React from "react";
import styles from "@/styles/WabePink.module.css";

export const WavePink = () => (
  <div>
    <svg
      className={styles.svgWave}
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
    >
      <path
        d="M11.29,145.56 C95.93,-204.75 430.01,297.55 506.20,-15.27 L500.00,0.00 L-3.38,-4.42 Z"
        style={{
          stroke: "none",
          fill: " #e8cccd",
        }}
      ></path>
    </svg>
  </div>
);
