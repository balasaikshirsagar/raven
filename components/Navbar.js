// components/Navbar.js
import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';
import { NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <div className={styles.brandContainer}>
          <img
            src="/raven.png"
            alt="Raven Labs"
            className={styles.logo}
          />
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/blogs" className={styles.navLink}>Blogs</Link>
            <Link href="/partners" className={styles.navLink}>Partners</Link>
            <Link href="/about-us" className={styles.navLink}>About Us</Link>
            <Link href="/contact-us" className={styles.navLink}>Contact Us</Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
