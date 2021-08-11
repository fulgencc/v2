/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './hero.module.scss';

const Hero = (props) => {
  const {
    variants,
  } = props;

  return (
    <motion.section className={styles.hero_section}>
      <motion.h2 variants={variants} className={styles.heading}>Chris Fulgencio</motion.h2>
      <motion.h3 variants={variants} className={styles.heading}>Frontend Engineer</motion.h3>
      <motion.p variants={variants}>
        I&apos;m a software engineer specializing in building and designing
        exceptional digital experiences.
        Currently, I&apos;m focused on building accessible, human-centered products at
        {' '}
        <a href="www.fulgenc.io">Ohana</a>
        .
      </motion.p>
    </motion.section>
  );
};

export default Hero;
