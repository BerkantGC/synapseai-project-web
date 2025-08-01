'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-6 sm:py-8 relative bg-gray-800 border-t border-gray-700`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-6 sm:gap-8`}>
      <div className="flex flex-col">

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[20px] sm:text-[24px] text-white">
            SYNAPSE
          </h4>
          <p className="font-normal text-[12px] sm:text-[14px] text-gray-400 text-center sm:text-right">
            Copyright © 2024 - 2025 Synapse. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
