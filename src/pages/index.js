/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useViewportScroll, motion } from 'framer-motion';
import * as styles from './styles.module.scss';
import * as stars from './stars.module.scss';
import logo from '../images/favicon.png';
import me from '../images/me.jpg';
import nerddarts from '../images/nerd-darts.jpg';
import fulgencio from '../images/fulgencio.png';
import Jobs from '../components/Jobs';

// markup
const IndexPage = () => {
  // const prevScrollY = React.useRef(0);

  // const [goingUp, setGoingUp] = React.useState(true);

  const { scrollYProgress } = useViewportScroll();

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (prevScrollY.current < currentScrollY && goingUp) {
  //       setGoingUp(false);
  //     }
  //     if (prevScrollY.current > currentScrollY && !goingUp) {
  //       setGoingUp(true);
  //     }

  //     prevScrollY.current = currentScrollY;
  //     console.log(goingUp, currentScrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [goingUp]);
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
      {/* <header className={styles.header}>
        <nav className={styles.nav}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div>
            <ul>
              <li>
                About
              </li>
            </ul>
          </div>
        </nav>
      </header> */}
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
        <motion.section
          className={styles.hero_section}
        >
          <motion.h2 variants={item} className={styles.heading}>Chris Fulgencio</motion.h2>
          <motion.h3 variants={item} className={styles.heading}>Frontend Engineer</motion.h3>
          <motion.p variants={item}>
            I&apos;m a software engineer specializing in building and designing
            exceptional digital experiences.
            Currently, I&apos;m focused on building accessible, human-centered products at
            {' '}
            <a href="www.fulgenc.io">Ohana</a>
            .
          </motion.p>
        </motion.section>

        <section id="about" className={styles.about_section}>
          <h2>About Me</h2>
          <div className={styles.inner_section}>
            <div>
              <p>
                Hi there! My name is Chris Fulgencio.
                I&apos;m a software engineer specializing in front-end
                development. During my four years at UC Irvine,
                I was heavily involved in game development.
                I even made a game which
                {' '}
                <a href="https://innovation.uci.edu/2016/08/pasttidesieeegamesig/">won first place at an intercollegiate competition!</a>
              </p>
              <p>
                Starting my career after college, however, I ran across React and
                fell in love with web development. Fast forward to today and I&apos;m
                helping build and architect front-end codebases full-time!
              </p>
              <p>
                Some of the technologies I&apos;ve worked with include:
              </p>
              <ul className={styles.about_tech}>
                <li>
                  Javascript (ES6)
                </li>
                <li>
                  Typescript
                </li>
                <li>
                  GraphQL
                </li>
                <li>
                  Apollo
                </li>
                <li>
                  React
                </li>
                <li>
                  Gatsby
                </li>
              </ul>
            </div>
            <img src={me} className={styles.me} alt="me" />
          </div>
        </section>

        <Jobs />

        <section id="projects" className={styles.project_section}>
          <h2>Projects</h2>
          <ul className={styles.projects_list}>
            <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>Personal Project</p>
                <h3 className={styles.project_title}>Nerd Darts</h3>
                <div className={styles.project_descr}>
                  <p>
                    A web app for the tactical shooter Valorant. The app aims
                    to help players effortlessly memorize and visualize lineups
                    for agents.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <img src={nerddarts} className={styles.image} alt="me" />
              </div>
            </li>
            <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>Personal Project</p>
                <h3 className={styles.project_title}>Fulgenc.io</h3>
                <div className={styles.project_descr}>
                  <p>
                    My personal portfolio site, which has gone through multiple
                    iterations. Built with React and Gatsby, and hosted on GitHub
                    Pages.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Gatsby</li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <img src={fulgencio} className={styles.image} alt="me" />
              </div>
            </li>
            <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>Personal Project</p>
                <h3 className={styles.project_title}>GIPHY Search Clone</h3>
                <div className={styles.project_descr}>
                  <p>
                    A small web app which utilizes the GIPHY API to display GIFs
                    that users can search for.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <img src={nerddarts} className={styles.image} alt="me" />
              </div>
            </li>
            {/* <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>Work Project</p>
                <h3 className={styles.project_title}>Queue Management Application</h3>
                <div className={styles.project_descr}>
                  <p>
                    Hello! Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Typescript</li>
                </ul>
              </div>
              <img src={nerddarts} className={styles.image} alt="me" />
            </li>
            <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>School Project</p>
                <h3 className={styles.project_title}>Cavern Tavern</h3>
                <div className={styles.project_descr}>
                  <p>
                    Hello! Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Typescript</li>
                </ul>
              </div>
              <img src={nerddarts} className={styles.image} alt="me" />
            </li> */}
          </ul>
        </section>
      </main>
    </motion.div>
  );
};

export default IndexPage;
