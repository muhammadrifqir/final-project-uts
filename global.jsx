// import Cards from "../Cards";
import React from "react";
import data from "../../utils/constants/indonesia";
import styles from "./global.module.css";

function Global() {
  return (
    <div className={styles.container}>
      <div className={styles.global__title}>
        <p className={styles.global__judul}>Indonesia</p>
        <p className={styles.global__subtitle}>Data Covid Berdasarkan Global</p>
      </div>
      <div className={styles.global__cards}>
        {/* {data.indonesia.map((data) => (
                    <Cards
                    key={data.status}
                    status={data.status}
                    total={data.total}
                    detail={data.detail}
                    />
                ))} */}
      </div>
    </div>
  );
}

export default Global;
