import styles from "../myskills/skills.module.css";
import {
  FaChalkboard,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

function MyComponent() {
  return <FontAwesomeIcon icon={FaChalkboard} />;
}

const Skills = () => {
  return (
    <div className={styles.skill}>
      <h2>My Skills</h2>
      <div className={styles.roundedLined}>
        <div className={styles.circle}></div>
        <hr className={styles.roundedLine} />
        <div className={styles.circle}></div>
      </div>

      <h5 className={styles.h5}>
        I am striving to never stop learning and improving
      </h5>
      <div className={styles.webDevelopment}>
        <FaChalkboard className={styles.icon} />
        <span>Web Development </span>
        <ul>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>React</span>
          </li>
        </ul>
      </div>
      <ul className={styles.mySkill}>
        <li className={styles.skil}>
          <div>
            <FaHtml5 className={styles.icon} />
          </div>
          HTML
        </li>
        <li className={styles.skil}>
          <div>
            <FaCss3Alt className={styles.icon} />
          </div>
          CSS
        </li>
        <li className={styles.skil}>
          <div>
            <FaJs className={styles.icon} />
          </div>
          <span>JavaScript</span>
        </li>

        <li className={styles.skil}>
          <div>
            <FaReact className={styles.icon} />
          </div>
          <span> React</span>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
