import React, { useEffect, useState } from "react";
import styles from "@/styles/Loader.module.css";

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={styles.contentLoader + (loading ? "" : ` ${styles.loading}`)}
    >
      <div className={styles.hoja}>THE WEB SHOP</div>
    </div>
  );
};
