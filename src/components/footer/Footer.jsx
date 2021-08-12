import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import * as styles from './footer.module.scss';

const Footer = () => (
  <div className={styles.socials}>
    <ul>
      <li>
        <a href="https://github.com/fulgencc/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/chris-fulgencio-b25554103/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/hipstopher94/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
