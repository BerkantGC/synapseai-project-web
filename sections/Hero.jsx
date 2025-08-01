'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-4`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col items-center`}
    >
      <motion.div className="relative w-full flex flex-col items-center px-4">
        <img
          src="/logo.png"
          alt="cover"
          className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] object-cover rounded-[24px] z-10"
        />
        <div className="relative z-10 flex flex-col items-center mt-4 sm:mt-6">
          <motion.h1
            variants={textVariant(0.2)}
            className={styles.heroHeading}
          >
            SYNAPSE
          </motion.h1>
          <motion.h3
            variants={textVariant(0.4)}
            className={styles.heroDescription}
          >
            AI-Enhanced Social Media Platform
          </motion.h3>
          <motion.div
            variants={textVariant(0.6)}
            className="mt-4 sm:mt-6 gap-3 sm:gap-4 flex flex-col sm:flex-row items-center justify-center w-full max-w-md sm:max-w-none"
          >
            <a
              href="https://github.com/BerkantGC/SynapseAI-IOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm sm:text-base rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[180px]"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">Mobile (SwiftUI)</span>
            </a>
            <a
              href="https://github.com/Hevdenn/SynapseAIREC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm sm:text-base rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[180px]"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">Recommender AI</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
