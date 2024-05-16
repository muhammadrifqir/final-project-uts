import styles from "./hero.module.css";
import image from "../gambar/dokter.png";
import React from "react";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__judul}>Covid ID</h2>
          <h3 className={styles.hero__title}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__discription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>

          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img src={image} className={styles.hero__image} alt="placeholder" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
