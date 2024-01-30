import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <AnimatePresence>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8, ease: 'easeIn' }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    </AnimatePresence>
    
  );
};

export default MotionWrap;
