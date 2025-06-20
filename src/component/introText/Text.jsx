import styles from "./text.module.css";

const Text = () => {
  return (
    <section className={styles.rightContainer}>
      <section className={styles.uptext}>
        <h1>
          Hi, I'm <span>Mustapha</span>, a Front-end Developer
        </h1>
        <p>
          I help business grow by creating amazing and handsome website. If u
          are looking for front-end dev kindly reach out to me.
        </p>
        <div className={styles.smallText}>
          <span>Let's work together to create something amazing!</span>
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
      </section>
      <section className={styles.downtext}>
        <div>
          <span>4</span>
          <p>Programming language</p>
        </div>
        <div>
          <span>6</span>
          <p>Development tool</p>
        </div>
        <div>
          <span>3</span>
          <p>Years of experience</p>
        </div>
      </section>
    </section>
  );
};

export default Text;
