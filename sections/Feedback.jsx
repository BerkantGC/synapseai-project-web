'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`} id="feedback">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.1, 0.6)}
        className="flex-[0.4] lg:max-[370px] flex justify-end lg:justify-center flex-col bg-gray-800/50 sm:p-8 p-4 rounded-[32px] border-[1px] border-gray-600 relative mx-4 sm:mx-0"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[24px] sm:leading-[40px] leading-[32px] text-white">Vignesh</h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] sm:leading-[22px] leading-[18px] text-gray-300">Founder of MetaDroid</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-gray-200">
          “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.6)}
        className="relative flex-1 flex justify-center item-center"
      >
        <img src="/planet-09.png" alt="planet" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 0.4)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="md:w-[170px] w-[115px]  md:h-[170px] h-[115px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
