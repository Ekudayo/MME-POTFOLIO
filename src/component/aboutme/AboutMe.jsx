import Ai from "../../assets/ai.jpg";
import styles from "../aboutme/aboutme.module.css";
const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.leftMe}>
        <h1>About Me</h1>
        <p>
          I am Mustapha, a dedicated <span>front-end developer</span> with a
          passion for creating <span>engaging</span>, <span>responsive</span>,
          and <span>accessible websites</span> and <span>web applications</span>
          . I excel at transforming <span>design concepts</span> and{" "}
          <span>wireframes</span> into <span>interactive user interfaces</span>{" "}
          using <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>,
          and <span>React</span>. My focus is on ensuring{" "}
          <span>cross-browser compatibility</span>,{" "}
          <span>fast performance</span>, and{" "}
          <span>seamless user experiences</span>. I work closely with designers
          to meet <span>project standards</span> and integrate{" "}
          <span>front-end components</span> with <span>backend APIs</span>. I’m
          committed to <span>continuous improvement</span>, <span>testing</span>
          , and following <span>best practices</span> in{" "}
          <span>UX/UI design</span>, <span>accessibility</span>, and{" "}
          <span>modern development tools</span>.
        </p>
      </div>
      <div className={styles.rightMe}>
        <img className={styles.boy} src={Ai} alt="A boy creating website" />
      </div>
    </section>
  );
};

export default AboutMe;
