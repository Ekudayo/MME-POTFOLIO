import styles from "../navbar/navbar.module.css";
import MME1 from "../../assets/MME1.png";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.leftbar}>
        <img className={styles.img} src={MME1} alt="MME Logo" />
      </div>
      <div
        className={styles.rightBar}
      
      >
        <h3>
          <span>Home</span>
        </h3>
        <h3>Blogs</h3>
        <nav className={styles.socialLinks}>
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
        </nav>
      </div>
      <div
        className={`${styles.rightBarMobileContainer} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.rightbar}>
          <h3>
            <span>Home</span>
          </h3>
          <h3>Blogs</h3>
          <nav className={styles.socialLinks}>
            <span>
              <a
                href="https://github.com/Ekudayo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <i className={"fa-brands fa-square-github"}></i>
              </a>
            </span>

            <span>
              <a
                href="https://www.instagram.com/mustaphamustaphaekundayo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </span>

            <span>
              <a
                href="https://www.linkedin.com/in/mustapha-ekundayo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </span>

            <span>
              <a
                href="https://www.whatsapp.com/Mustopha Mustopha Ekundayo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </span>
          </nav>
        </div>
      </div>
      <span className={styles.faIcon} onClick={toggleMenu}>
        <FiAlignJustify />
      </span>
    </div>
  );
};
export default Navbar;
