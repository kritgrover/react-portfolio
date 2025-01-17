import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.75, delay: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hey there! I'm</p>
            <h1 className="head-text">Krit</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software Developer</p>
          <p className="p-text">Data Scientist</p>
          <p className="p-text">Teaching Assistant</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        transition={{ duration: 2, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="app__header-circles"
    >
      {[images.react, images.python, images.kotlin].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
