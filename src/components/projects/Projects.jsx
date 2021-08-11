import React from 'react';
import nerddarts from '../../images/nerd-darts.jpg';
import fulgencio from '../../images/fulgencio.png';
import * as styles from './projects.module.scss';

const Projects = () => (
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
    </ul>
  </section>
);

export default Projects;
