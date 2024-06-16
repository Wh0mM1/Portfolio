import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <br />
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="https://education.oracle.com/file/general/p-80-java.png" alt="Server icon" width={80}/>
            <div className={styles.aboutItemText}>
              <h3>Java Developer</h3>
              <br />
              <p>
                Expertise in implementing microservices using Spring Boot and Quarkus. Which will help to meet business needs of highly scalable, reliable and robust applications. Containerizing applications with Docker and setting environment to make it platform independent. Implementation of Kubernetes for scaling and Jenkins for CI/CD.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" alt="Cursor icon" width={80}/>
            <div className={styles.aboutItemText}>
              <h3>Flutter Developer</h3>
              <br />
              <p>
                Skilled Flutter developer with a strong background in creating high-performance, cross-platform mobile applications. Proficient in Dart and experienced in integrating backend services, UI/UX design, and optimizing app functionality to continuously improving user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
