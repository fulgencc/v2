/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useViewportScroll, motion } from 'framer-motion';
import * as styles from './styles.module.scss';
import * as stars from './stars.module.scss';
import logo from '../images/favicon.png';
import Jobs from '../components/jobs/Jobs';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';

// markup
const IndexPage = () => {
  // const prevScrollY = React.useRef(0);

  // const [goingUp, setGoingUp] = React.useState(true);

  const { scrollYProgress } = useViewportScroll();

  // animations
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  const leftItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const rightItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
    >
      <div className={stars.stars} />
      <div className={stars.stars2} />
      <div className={stars.stars3} />

      <div className={styles.left_sidebar_container}>
        <motion.img variants={item} src={logo} className={styles.logo} alt="logo" />
        <div className={styles.left_sidebar}>
          <div className={styles.progress_bar}>
            <motion.div
              className={styles.progress_bar_inner}
              style={{
                scaleY: scrollYProgress,
              }}
            />
          </div>
          <ul>
            <motion.li variants={leftItem}>
              <a href="/#about">About</a>
            </motion.li>
            <motion.li variants={leftItem}>
              <a href="/#work">Work</a>
            </motion.li>
            <motion.li variants={leftItem}>
              <a href="/#projects">Projects</a>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className={styles.right_sidebar}>
        <ul>
          <li>
            <motion.a href="https://github.com/fulgencc/" target="_blank" rel="noreferrer" variants={rightItem}>
              <FaGithub />
            </motion.a>
          </li>
          <li>
            <motion.a href="https://www.linkedin.com/in/chris-fulgencio-b25554103/" target="_blank" rel="noreferrer" variants={rightItem}>
              <FaLinkedinIn />
            </motion.a>
          </li>
          <li>
            <motion.a href="https://www.instagram.com/hipstopher94/" target="_blank" rel="noreferrer" variants={rightItem}>
              <FaInstagram />
            </motion.a>
          </li>
        </ul>
      </div>
      <main className={styles.main}>
        <title>Chris Fulgencio | fulgenc.io</title>
        <Hero variants={item} />

        <About />

        <Jobs />

        <Projects />
      </main>
    </motion.div>
  );
};

export default IndexPage;
