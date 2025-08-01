import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullScreen = ({ imgUrl, title, isFullscreen, setIsFullscreen, isVideo, isYouTubeVideo, isStaticVideo, videoId }) => {
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
    <AnimatePresence>
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 xs:p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFullscreen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="fullscreen-title"
        >
          <motion.div
            className="relative w-full h-full max-w-6xl max-h-[95vh] xs:max-h-[90vh] flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.currentTarget === e.target && setIsFullscreen(false)}
          >
            {isVideo ? (
              <>
                {isYouTubeVideo && videoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="max-w-full max-h-full rounded-lg sm:rounded-xl shadow-2xl"
                    style={{ aspectRatio: '16/9' }}
                  />
                ) : isStaticVideo ? (
                  <video
                    src={imgUrl}
                    controls
                    autoPlay
                    className="w-full h-full rounded-lg sm:rounded-xl shadow-2xl"
                    style={{ aspectRatio: '16/9' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </>
            ) : (
              <img
                src={imgUrl}
                alt={title}
                className="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl"
              />
            )}

            {/* Close Button */}
            <motion.button
              className="absolute top-2 right-2 xs:top-4 xs:right-4 bg-white/10 text-white hover:bg-white hover:text-black p-1.5 xs:p-2 rounded-full backdrop-blur-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close fullscreen view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreen;