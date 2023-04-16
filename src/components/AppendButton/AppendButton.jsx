// import { useRef, createRef, useState } from "react";
import styles from "./append.module.css";

export default function (props) {
  return (
    <div className={styles["append-box"]}>
      <div className={styles.arrow} />
      <div
        title="append a group"
        onClick={() => props.onClick()}
        className={styles["append-button"]}
      >
        +
      </div>
    </div>
  );
}
