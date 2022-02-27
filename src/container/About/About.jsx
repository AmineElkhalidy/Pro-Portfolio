import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

// const abouts = [
//   {
//     title: "Web Development",
//     description:
//       "I am a web developer, that implement the best of backend and frontend technologies, to deliver a quality work.",
//     imgUrl: images.about01,
//   },

//   {
//     title: "React Native Developer",
//     description:
//       "I am a React Native developer with a passion of building well functional mobile applications.",
//     imgUrl: images.about02,
//   },

//   {
//     title: "Backend Developer",
//     description:
//       "I am a backend developer, pointing at the best technologies for creating such amazing interactive projects.",
//     imgUrl: images.about03,
//   },

//   {
//     title: "Frontend Developer",
//     description:
//       "I am a frontend developer, that tries his best to build well designed and beautiful projects, that would catch your attention.",
//     imgUrl: images.about04,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // fetching our about info
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Good Dev</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>

            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
