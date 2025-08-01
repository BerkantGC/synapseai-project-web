'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import FullScreen from './FullScreen';

// Utility functions remain the same
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const isYouTubeUrl = (url) => {
  return url && (url.includes('youtube.com') || url.includes('youtu.be'));
};

const isStaticVideoUrl = (url) => {
  if (!url) return false;
  const videoExtensions = /\.(mp4|webm|ogg|avi|mov|wmv|flv|mkv)(\?.*)?$/i;
  return videoExtensions.test(url);
};

const ExploreCard = ({ id, imgUrl, title, description, index, active, handleClick }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const isYouTubeVideo = isYouTubeUrl(imgUrl);
  const isStaticVideo = isStaticVideoUrl(imgUrl);
  const isVideo = isYouTubeVideo || isStaticVideo;
  const videoId = isYouTubeVideo ? getYouTubeVideoId(imgUrl) : null;
  
  let thumbnailUrl = imgUrl;
  if (isYouTubeVideo && videoId) {
    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  const toggleFullscreen = () => {
    handleClick(id);
    setIsFullscreen(!isFullscreen);
  };

  // Effects remain the same
  useEffect(() => {
    if (active !== id) setIsFullscreen(false);
  }, [active, id]);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      {/* Card - Updated for mobile responsiveness */}
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.1, 0.5)}
        className="relative w-full h-[200px] sm:h-[300px] md:h-[360px] lg:h-[420px] cursor-pointer group transition-all duration-300 ease-out rounded-xl overflow-hidden shadow-lg backdrop-blur-md"
        onClick={toggleFullscreen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFullscreen()}
        aria-label={`Explore ${title}`}
      >
        {isVideo ? (
          <div className="absolute w-full h-full">
            {isStaticVideo ? (
              <video 
                src={imgUrl}
                className="absolute w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300 scale-100 group-hover:scale-105"
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img 
                src={thumbnailUrl} 
                alt={title} 
                className="absolute w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300 scale-100 group-hover:scale-105"
                loading="lazy"
              />
            )}
            {/* Play button overlay - made smaller for mobile */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="bg-red-600 hover:bg-red-700 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <img 
            src={imgUrl} 
            alt={title} 
            className="absolute w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300 scale-100 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 md:p-4 text-white z-10">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-2">{title}</h3>
          {description && (
            <p className="text-xs opacity-80 mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </motion.div>

      {/* Fullscreen View */}
      <AnimatePresence>
        <FullScreen
          imgUrl={imgUrl}
          title={title}
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
          isVideo={isVideo}
          isYouTubeVideo={isYouTubeVideo}
          isStaticVideo={isStaticVideo}
          videoId={videoId}
        />
      </AnimatePresence>
    </>
  );
};

export default ExploreCard;