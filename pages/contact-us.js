// pages/contact-us.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function ContactUs() {
  return (
    <div className={styles.contact}>
      <Navbar />
      <h1 className={styles.contactTitle}>
        Contact <span>Us</span>
      </h1>

      <p className={styles.contactDescription}>
        Thank you for considering Raven Labs. We look forward to connecting with
        you and exploring how we can contribute to your success.
      </p>

      <div className={styles.contactBox}>
        <div className={styles.mail}>
          <img src="/mail3d.png" alt="Mail Icon" />
          <span>info@ravenlabs.com.au</span>
        </div>

        <div className={styles.message}>
          <img src="/message3d-1.png" alt="Message Icon" />
          <span>+61 432 913 392</span>
        </div>
      </div>

      <div className={styles.contactBoxForm}>
        <h3 style={{ color: "red", textAlign: "center", marginTop: "70px" }}>
          The field is required mark as *
        </h3>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          <div className={styles.formRow} id="inquiry">
            <div className={styles.formGroup}>
              <label htmlFor="reason"></label>
              <select id="reason" name="reason" required>
                <option
                  style={{ textAlign: "start", padding: "5px 60px" }}
                  value=""
                >
                  your inquiry about
                </option>
                <option value="inquiry">BI Systems</option>
                <option value="support">Mobile Apps</option>
                <option value="support">ERP</option>
                <option value="support">Digital Marketing</option>
                <option value="support">AI Integration</option>
                <option value="support">Tech Support</option>
                <option value="support">Web Development</option>
              </select>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <div className={styles.formRow}>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer></Footer>

      
    </div>
  );
}
