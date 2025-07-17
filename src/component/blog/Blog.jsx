import styles from "../blog/blog.module.css";
import computer from "../../assets/computer.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blogContainer}>
        <div className={styles.topBlog}>
          <div className={styles.topFirst}>
            <div className={styles.topItem}>
              <h1>Blogs</h1>
              <div className={styles.shape}>
                <span className={styles.rounded}></span>
                <span className={styles.horizontal}></span>
                <span className={styles.rounded}></span>
              </div>
            </div>
            <p>
              My Advices to youth of this era on Programming,is not an easy task
              but with hard work u will get it
            </p>
          </div>
          <div className={styles.horizontalLine}></div>
          <div className={styles.downBlog}>
            <img className={styles.computer} src={computer} alt="laptop-img" />
            <div className={styles.rightContent}>
              <h2>What does it take to become a Full-STACK-DEV ?</h2>
              <h5>
                Becoming a full-stack developer is an exciting journey that
                involves mastering both front-end and back-end skills, building
                real projects to gain confidence, and continuously learning new
                technologies—it's challenging but incredibly rewarding and opens
                up endless opportunities in tech!
              </h5>
              <div className={styles.readMore}>
                <span>Read more </span>
                <span>
                  {" "}
                  <AiOutlineArrowRight />
                </span>
                <span>
                  {" "}
                  <AiOutlineArrowRight />
                </span>

               
              </div>
              <div className={styles.simpleTask}>
                <button className={styles.auth}>Web Develop</button>
                <div className={styles.info}>
                  <h2>text</h2>
                  <h5>Mustapha</h5>
                </div>
                <div className={styles.info}>
                  <h2>Date</h2>
                  <h5>15,July,2025</h5>
                </div>
                <div className={styles.info}>
                  <h2>Read</h2>
                  <h5>1 Min</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine}></div>
      </div>
      <div className={styles.downButton}>
        <button className={styles.viewMore}>View More</button>
        <button className={styles.subscribe}>Suscribe</button>
      </div>
    </div>
  );
};

export default Blog;
