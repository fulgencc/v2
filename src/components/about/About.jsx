import React from 'react';
import * as styles from './about.module.scss';
import me from '../../images/me.jpg';

const About = () => (
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
            GraphQL/Apollo
          </li>
          <li>
            Jest/Cucumber/Cypress
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
);

export default About;
