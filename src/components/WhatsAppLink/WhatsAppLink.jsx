import React from "react";
import styles from "@/styles/WhatsAppLink.module.css";

export const WhatsAppLink = () => {
  const phoneNumber = "1568824488"; // número de teléfono

  const url = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <div className={styles.whatsappLink}>
        <a href={url}>
          <img
            src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1684152340/whatsAppLogo_rbsgbt.png"
            alt="WhatsApp logo"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppLink;
