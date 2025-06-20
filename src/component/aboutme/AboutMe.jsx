import Ai from "../../assets/ai.jpg";
import styles from "../aboutme/aboutme.module.css";
const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.leftMe}>
        <h1>About Me</h1>
        <p>
          I am <span>Mustapha</span>, a passionate front-end developer dedicated
          to creating engaging and intuitive websites and web applications. I
          specialize in translating design concepts and wireframes into
          functional, visually appealing user interfaces using
          <span> HTML, CSS, JavaScript and REACT</span>. My focus is on building
          responsive and accessible experiences that function perfectly across
          all devices and browsers. I work closely with designers to ensure the
          visual and usability aspects of the interface meet project standards,
          while optimizing performance for fast load times and smooth
          interactions. I also integrate front-end components with backend
          <span> APIs</span>
          to enable <span>dynamic content and features</span> . Continuous
          testing and debugging help me maintain high-quality, accessible, and
          user-friendly websites. My technical skills include modern frameworks
          and libraries such as React, Vue.js, and Angular, along with tools
          like Webpack, Babel, and Git. I am committed to following best
          practices in UX/UI design, accessibility, and performance to deliver{" "}
          <span>
            {" "}
            websites that satisfy user needs and align with business goals
          </span>
          .
        </p>
      </div>
      <div className={styles.rightMe}>
        <img className={styles.boy} src={Ai} alt="A boy creating website" />
      </div>
    </section>
  );
};

export default AboutMe;
