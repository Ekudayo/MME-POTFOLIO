import Ai from "../../assets/Ai.jpg";
import styles from "../aboutme/aboutme.module.css";
const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.leftMe}>
        <h1>About Me</h1>
        <p>
          I am Mustapha, a dedicated front-end developer with a passion for
          creating engaging,responsive, and accessible websites and web
          applications . I excel at transforming design concepts and wireframes
          into interactive user interfaces using HTML,CSS,JavaScript, and
          React.My focus is on ensuring cross-browser compatibility, fast
          performance, and seamless user experiences. I work closely with
          designers to meet project standards and integrate front-end components
          with backend APIs. I’m committed to continuous improvement,testing , and
          following best practices in UX/UI design,accessibility, and modern
          development tools.
        </p>
      </div>
      <div className={styles.rightMe}>
        <img className={styles.boy} src={Ai} alt="A boy creating website" />
      </div>
    </section>
  );
};

export default AboutMe;
