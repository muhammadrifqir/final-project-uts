import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer__brand}>
          <h2>Covid ID</h2>
          <p>Developed by Naufal</p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
