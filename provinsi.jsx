import Table from "../table"
import styles from "./provinsi.module.css"

function Provinces(props) {
    const { provinces,} = props;

    return (
        <div className={styles.container}>
            <div className={styles.provinsi}>
                <div className={styles.provinsi__title}>
                    <h2>Provinsi</h2>
                    <h3>Data Covid Berdasarkan Provinsi</h3>
                </div>
                <div className={styles.provinsi__container}>
                    <table className={styles.provinsi__table}>
                        <tr className={styles.judultable}>
                            <th>No.</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                        <tbody>
                            {provinces.map((data, index) => (
                                <Table
                                    index={index}
                                    key={data.kota}
                                    kota={data.kota}
                                    kasus={data.kasus}
                                    dirawat={data.dirawat}
                                    sembuh={data.sembuh}
                                    meninggal={data.meninggal}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Provinces;
