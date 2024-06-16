import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.content}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shaikhnihal92@email.com">shaikhnihal92@gmail.com</a>
        </li>
        <ul className={styles.links}>
          <li className={styles.link}>
          <a href="https://www.linkedin.com/in/nihal-shaikh-4a0818206/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/Wh0mM1">
              <img 
                src={getImageUrl("contact/githubIcon.png")} 
                alt="Github icon" 
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://leetcode.com/u/shaikhnihal92/">
              <img 
                src={getImageUrl("contact/leetcode.png")} 
                alt="Github icon" 
                width={45}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
