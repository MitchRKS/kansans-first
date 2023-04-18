import React from "react";
import styles from "./MidSection.module.scss";

export default function MidSection() {
  return (
    <div className={styles.MidSection}>
      <div className={styles.DescriptionBoxDiv}>
        <div className={styles.DescriptionBox}>
          <h1>Special Interest Handouts</h1>
          <p>$1 Billion for a battery factory.</p>
          <p>$10 million for "Scholarship Granting Organizations"</p>
          <p>Third shitty thing.</p>
        </div>
        <div className={styles.DescriptionBox}>
          <h1>Closing Rural Schools</h1>
          <p>Whatever they cut schools this time.</p>
          <p>Building closures last 2 years.</p>
          <p>Third shitty thing.</p>
        </div>
        <div className={styles.DescriptionBox}>
          <h1>Shuttering Rural Hospitals</h1>
          <p>Gave up a fuckton of federal money.</p>
          <p>No healthcare for like 150k people.</p>
          <p>Also no weed.</p>
        </div>
        <div className={styles.DescriptionBox}>
          <h1>Death and... </h1>
          <p>Tax hikes for people making under $30,000/year.</p>
          <p>Property tax passthrough.</p>
          <p>Third shitty thing.</p>
        </div>
      </div>
    </div>
  );
}
