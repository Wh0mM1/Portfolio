import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>👋 Hi, I'm Nihal</h1>
        <p className={styles.description}>
          An enthusiastic Software Developer with a solid foundation in mobile and web applications. 
            <br/>
            Proficient in frameworks Spring Boot and Flutter!
          </p>
        <a href="mailto:shaikhnihal92@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
