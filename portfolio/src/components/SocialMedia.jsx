import React from "react";
import { BsLinkedin, BsMedium, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/kritgrover/"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://www.medium.com/kritgrover/"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <BsMedium />
        </div>
      </a>
      <a
        href="https://www.github.com/kritgrover/"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
