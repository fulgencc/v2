/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import * as styles from './styles.module.scss';
import logo from '../images/favicon.png';
import me from '../images/me.jpg';
import nerddarts from '../images/nerd-darts.jpg';

// markup
const IndexPage = () => {
  console.log(styles);

  return (
    <>
      <header className={styles.header}>
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
      </header>
      <main className={styles.main}>
        <title>Chris Fulgencio | fulgenc.io</title>
        <section className={styles.hero_section}>
          <h2 className={styles.heading}>Chris Fulgencio</h2>
          <h3 className={styles.heading}>Frontend Engineer</h3>
          <p>
            I&apos;m a software engineer specializing in building and designing
            exceptional digital experiences.
            Currently, I&apos;m focused on building accessible, human-centered products at
            {' '}
            <a href="www.fulgenc.io">Ohana</a>
            .
          </p>
        </section>

        <section className={styles.about_section}>
          <h2>About Me</h2>
          <div className={styles.inner_section}>
            <div>
              <p>
                Hello! Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ante metus dictum at tempor commodo ullamcorper a.
                Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.
                Purus sit amet volutpat consequat mauris nunc congue.
              </p>
              <p>
                Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
                Justo eget magna fermentum iaculis. Morbi blandit cursus risus at ultrices.
                Eget arcu dictum varius duis at consectetur.
                Sed nisi lacus sed viverra tellus in hac. Commodo odio aenean sed adipiscing.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus.
              </p>
            </div>
            <img src={me} className={styles.me} alt="me" />
          </div>
        </section>

        <section className={styles.project_section}>
          <h2>Projects</h2>
          <ul className={styles.projects_list}>
            <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>Personal Project</p>
                <h3 className={styles.project_title}>Nerd Darts</h3>
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
                <p className={styles.project_subtitle}>Personal Project</p>
                <h3 className={styles.project_title}>Fulgenc.io</h3>
                <div className={styles.project_descr}>
                  <p>
                    Hello! Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Gatsby</li>
                </ul>
              </div>
              <img src={nerddarts} className={styles.image} alt="me" />
            </li>
            <li className={styles.project}>
              <div className={styles.project_content}>
                <p className={styles.project_subtitle}>Personal Project</p>
                <h3 className={styles.project_title}>GIPHY Search Clone</h3>
                <div className={styles.project_descr}>
                  <p>
                    Hello! Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className={styles.project_tech}>
                  <li>React</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <img src={nerddarts} className={styles.image} alt="me" />
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
    </>
  );
};

export default IndexPage;
