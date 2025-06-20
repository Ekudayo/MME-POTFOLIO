import styles from "../navbar/navbar.module.css";
import logo3 from "../../assets/logo3.png";
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.leftbar}>
        <img className={styles.img} src={logo3} alt="MME Logo" />
      </div>
      <div className={styles.rightbar}>
        <h3>
          <span>Home</span>
        </h3>
        <h3>Blogs</h3>
        <h3 className={styles.socialLinks}>
          <span>
            <a
              href="https://github.com/Ekudayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={"fa-brands fa-square-github"}></i>
            </a>
          </span>

          <span>
            <a
              href="https://www.instagram.com/mustaphamustaphaekundayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </span>

          <span>
            <a
              href="https://www.linkedin.com/in/mustapha-ekundayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>

          <span>
            <a
              href="https://www.whatsapp.com/Mustopha Mustopha Ekundayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </span>
        </h3>
        <i className="fa-solid fa-house my-icon"></i>
      </div>
    </div>
  );
};
export default Navbar;
