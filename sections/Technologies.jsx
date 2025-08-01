'use client';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { useState } from 'react';
import FullScreen from '../components/FullScreen';

const Technologies = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex lg:flex-col flex-col gap-6 sm:gap-8`}>
      <div className="flex-[0.95] flex justify-center flex-col px-4 sm:px-0">
        <TypingText title="| Technologies Used" />
        <TitleText title={<>Technologies Used in Synapse</>} />
      </div>

      <div className={`flex-1 ${styles.flexCenter} px-4 sm:px-0`} onClick={() => setIsFullscreen(true)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFullscreen(true)} aria-label="View technologies overview in fullscreen">
        <img
          src="/diagram.png"
          alt="technologies overview"
          className="w-[100%] h-[100%] object-contain rounded-lg shadow-lg touch-manipulation"
        />
      </div>
    </div>

    <FullScreen
    imgUrl={"/diagram.png"}
    title="Technologies Overview"
    isFullscreen={isFullscreen}
    setIsFullscreen={setIsFullscreen}
    />
  </section>
  );
}

export default Technologies;
