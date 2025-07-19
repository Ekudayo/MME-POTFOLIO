import MME from "../../assets/MME.png";
import styles from "../user-info/my-info.module.css";

const MyInfo = () => {
  return (
    <section className={styles.outlineColor}>
      <div className={styles.myInfoContainer}>
        <img className={styles.profileImage} src={MME} alt="User-image" />
        <h2>Mustapha.M.E</h2>
        <h3>Front-end Developer</h3>
        <div className={styles.contactInfo}>
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          <h5>ekundayomustapha92@gmail.com.</h5>
        </div>
        <div className={styles.contactInfo}>
          <span>
            <i className="fa-solid fa-location-crosshairs"></i>
          </span>
          <h5>Lagos, Nigeria.</h5>
        </div>
        <div className={styles.contactInfo}>
          <span>
            <i className="fa-duotone fa-solid fa-school"></i>
          </span>
          <h5>Full-time / Freelancer</h5>
        </div>
        <div className={styles.skillsList}>
          <span> HTML</span>

          <span> CSS</span>

          <span> JavaScript</span>

          <span> React</span>
        </div>
        <div className={styles.downloadCV}>
          <h3>Download CV</h3>
          <i className="fa-solid fa-download"></i>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
