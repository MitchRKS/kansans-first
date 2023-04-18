import React from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.NavBar}>
        <li>
          <a href="/">Kansans First PAC</a>
        </li>
        <div className={styles.linksDiv}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contribute">Contribute</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
