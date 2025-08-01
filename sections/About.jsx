'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Synapse"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 0.6)}
        className="mt-[8px] font-normal sm:text-[32px] md:text-[28px] lg:text-[32px] xs:text-[18px] text-[16px] text-center text-gray-300 max-w-4xl leading-relaxed px-4 sm:px-0"
      >
        <span className="font-extrabold text-white"> Synapse </span> is dynamic and collaborative social media platform where users can share their
        <span> own visual content or AI-generated visual</span>, and encourage
        creativity and interaction. The platform transforms user's ideas into immersive experiences by leveraging
        advanced AI tools to enable content creation and presents various customization.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.2, 0.4)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
