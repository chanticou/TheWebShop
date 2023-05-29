import { IoIosAirplane } from "react-icons/io";
import { CiStopwatch } from "react-icons/ci";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import styles from "@/styles/ContentDivs.module.css";

export const ContentDivs = () => {
  return (
    <>
      <div className={styles.contentdivs}>
        <div className={styles.contentCards}>
          <div className={styles.contentIcon}>
            <IoIosAirplane className={styles.icon} />
          </div>
          <p className={styles.title}>Posicionamiento</p>
          <p className={styles.subtitle}>
            Posicionamos tu página web en la primer hoja de Google en forma
            natural.
          </p>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.contentIcon}>
            <CiStopwatch className={styles.icon} />
          </div>
          <p className={styles.title}>Soluciones en el momento</p>
          <p className={styles.subtitle}>
            Soluciones en el momento de cualquier consulta que tenga.
          </p>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.contentIcon}>
            <BsPersonWorkspace className={styles.icon} />
          </div>
          <p className={styles.title}>Mantenimiento</p>
          <p className={styles.subtitle}>Mantenimiento por tres meses GRATIS</p>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.contentIcon}>
            <MdOutlinePriceCheck className={styles.icon} />
          </div>
          <p className={styles.title}>Mejor precio</p>
          <p className={styles.subtitle}>El mas enonomico del mercado</p>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.contentIcon}>
            <BsCloudUpload className={styles.icon} />
          </div>
          <p className={styles.title}>Actualizaicones constantes</p>
          <p className={styles.subtitle}>
            Actualización permanente ofreciéndote lo último del mercado.
          </p>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.contentIcon}>
            <BiMessageSquareDetail className={styles.icon} />
          </div>

          <p className={styles.title}>Acceso a todas las redes</p>
          <p className={styles.subtitle}>
            Actualización permanente ofreciéndote lo último del mercado.
          </p>
        </div>
      </div>
    </>
  );
};
