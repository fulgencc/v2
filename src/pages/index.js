import * as React from "react"
import * as styles from "./styles.module.scss"

// markup
const IndexPage = () => {
  console.log(styles)

  return (
    <main className={styles.main}>
      <title>Chris Fulgencio | fulgenc.io</title>
      <section className={styles.hero_section}>
      <h2 className={styles.heading}>Chris Fulgencio</h2>
      <h3 className={styles.heading}>Frontend Engineer</h3>
      <p>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <a>Ohana</a>.</p>
      </section>

      <section className={styles.about_section}>
        <h2>About Me</h2>
        <p>Hello! Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Purus sit amet volutpat consequat mauris nunc congue. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Justo eget magna fermentum iaculis. Morbi blandit cursus risus at ultrices. Eget arcu dictum varius duis at consectetur. Sed nisi lacus sed viverra tellus in hac. Commodo odio aenean sed adipiscing. Sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
      </section>
    </main>
  )
}

export default IndexPage
