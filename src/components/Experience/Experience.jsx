import React from "react";

import styles from "./Experience.module.css";

import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="resume">
      
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>Education</h2>
          <div className={styles.educationTitle}>
            <h3>BTech in Electronics and Telecommunication</h3>
            <p>2020-2024</p>
          </div>
          <div className={styles.collegeDetails}>
            <h4>Dwarkadas J Sanghvi College of Engineering, Mumbai</h4>
            <p>CGPA: 8.75/10</p>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Experience</h2>
            <ul className={styles.history}>
              {history.map((historyItem, id) => {
                return (
                  <li key={id} className={styles.historyItem}>
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                    />
                    <div className={styles.historyItemDetails}>
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul>
                        {historyItem.experiences.map((experience, id) => {
                          return <li key={id}>{experience}</li>;
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
        </div>
        
      </div>
    </section>
  );
};
