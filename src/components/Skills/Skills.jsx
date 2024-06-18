import React from 'react';
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import languages from "../../data/languages.json";
import databases from "../../data/database.json";


export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Languages</h2>
      <div className={styles.skills}>
          {languages.map((language, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={language.imageSrc} alt={language.title} />
                </div>
                <p>{language.title}</p>
              </div>
            );
          })}
        </div>
        <h2 className={styles.title1}>Framework / <br /> Technologies</h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <h2 className={styles.title2}>Databases</h2>
        <div className={styles.skills}>
          {databases.map((database, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={database.imageSrc} alt={database.title} />
                </div>
                <p>{database.title}</p>
              </div>
            );
          })}
        </div>

    </section>
  );
};
