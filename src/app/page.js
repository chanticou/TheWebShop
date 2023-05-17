"use client";
import { Main } from "../components/Main/index";
import styles from "./page.module.css";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
    </main>
  );
}
