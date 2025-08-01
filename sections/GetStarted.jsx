'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-4 lg:gap-8`}
    >
      <motion.div
        className={`${styles.flexCenter} flex-1 mb-4 lg:mb-0`}
      >
        <img 
          src="/story-ss.png" 
          alt="Get-Started" 
          className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[70%] xl:w-[50%] object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.1, 0.6)}
        className="flex-[0.75] flex justify-center flex-col px-4 sm:px-0"
      >
        <TypingText title="| How Synapse Works " />
        <TitleText title={<> Get Started with just a few touches </>} />
        <div className="mt-[20px] sm:mt-[31px] flex flex-col w-full max-w-[370px] gap-[16px] sm:gap-[24px]">
          {startingFeatures.map((features, index) => (
            <StartSteps
              key={features}
              number={index + 1}
              text={features}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
