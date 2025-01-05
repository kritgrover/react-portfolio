import React, { useState, useEffect } from "react";

import "./Interests.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Interests = () => {
  const [interests, setinterests] = useState([]);

  useEffect(() => {
    const query = '*[_type == "interests"]';

    client.fetch(query).then((data) => {
      setinterests(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Hobbies</span> & <span>Interests</span>
      </h2>
      <div className="app__flex interest_container">
        <div className="app__interest-list">
          {interests.map((interest) => (
            <div className="app__interest-item">
              <img src={urlFor(interest.imgurl)} alt={interest.name} />
              <h4 className="bold-text">{interest.name}</h4>
            </div>
          ))}
        </div>
        <div className="app__playlist">
          <p className="bold-text">My Favorite Playlist :)</p>
          <br></br>
          <iframe
            title="playlist"
            src="https://open.spotify.com/embed/playlist/41TxcBGMDu8rnJrVktEfaj?utm_source=generator"
            width="100%"
            height="512"
            style={{ borderRadius: "12px" }}
            frameBorder={0}
            allowfullscreen="false"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Interests, "app__interest"),
  "interests",
  "app__whitebg"
);
