import React from "react";
import styles from "@/styles/WabeGenerator.module.css";

export const WaveGenerator = () => (
  <div className={styles.contentWabeGenerator}>
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{ height: "100%", width: "50%" }}
    >
      <path
        d="M0.00,49.98 C343.11,-76.45 296.27,243.27 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{ stroke: "none", fill: "#e6cccd" }}
      ></path>
    </svg>
  </div>
);
