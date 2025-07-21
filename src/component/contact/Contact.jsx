import styles from "../contact/contact.module.css";
import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const hadleSubmit = (e) => {
    e.preventDefault();
    alert(`Name:${name}|Email:${email}|Message:${message}`);
  };
  return (
    <div className={styles.contact}>
      <div className={styles.for}>
        <h1>Contact</h1>
        <div className={styles.shape}>
          <span className={styles.round}></span>
          <span className={styles.horizontal}></span>
          <span className={styles.round}></span>
        </div>
        <p>I am currently open to freelance opportunities.</p>
      </div>

      <div className={styles.message}>
        <h2>Send Me A Text Message</h2>
        <form className={styles.form} onSubmit={hadleSubmit}>
          <div className={styles.inputOnly}>
            <div>
              <strong>Name</strong>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <strong>email</strong>
              <input
                type="text"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.mesText}>
              <strong>Message</strong>
              <input
                className={styles.messag}
                type="text"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button type={styles.submit}>
            <strong> Submit </strong>
            <span>
              <SiMinutemailer />
            </span>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
