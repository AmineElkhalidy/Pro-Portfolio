import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import Typical from "react-typical";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div id="home" className="profile__container">
      <div className="profile__parent">
        <div className="profile__details">
          <div className="profile__details-name">
            Hello, I am <span>Amine Elkhalidy</span>
          </div>

          <div className="profile__details-role">
            <h2>
              <Typical
                loop={Infinity}
                steps={[
                  "FrontEnd Web Dev",
                  1200,
                  "Mobile App Dev",
                  1200,
                  "React/Next Js Dev",
                  1200,
                ]}
              />
            </h2>

            <p>
              Implementing the best of frontend and backend technology to build
              projects
            </p>
          </div>

          <div className="profile__options">
            <div>
              <a href="#work" className="button primary-button">
                Projects
              </a>
            </div>
            <div>
              <a href="#contact" className="button secondary-button">
                Hire Me
              </a>
            </div>
          </div>
        </div>

        <div className="profile__picture">
          <div>
            <img src={images.logo} alt="Logo Image" />
          </div>
        </div>
      </div>
    </div>
    // <div id="home" className="app__header app__flex">
    //   <motion.div
    //     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    //     transition={{ duration: 1 }}
    //     className="app__header-info"
    //   >
    //     <div className="app__header-badge">
    //       <div className="badge-cmp app__flex">
    //         <span>👋</span>
    //         <div style={{ marginLeft: 20 }}>
    //           <p className="p-text">Hello, I am</p>
    //           <h2 className="head-text">Amine</h2>
    //         </div>
    //       </div>

    //       <div className="tag-cmp app__flex">
    //         <p className="p-text">Web Developer</p>
    //         <p className="p-text">UI/UX Design</p>
    //       </div>
    //     </div>
    //   </motion.div>

    //   <motion.div
    //     whileInView={{ opacity: [0, 1] }}
    //     transition={{ duration: 1, delayChildren: 0.5 }}
    //     className="app__header-img"
    //   >
    //     <img src={images.profile} alt="profile image" />
    //     <motion.img
    //       whileInView={{ scale: [0, 1] }}
    //       transition={{ duration: 1, ease: "easeInOut" }}
    //       src={images.circle}
    //       alt="profile background"
    //       className="overlay_circle"
    //     />
    //   </motion.div>

    //   <motion.div
    //     variants={scaleVariants}
    //     whileInView={scaleVariants.whileInView}
    //     className="app__header-circles"
    //   >
    //     {[images.flutter, images.redux, images.sass].map((circle, index) => (
    //       <div className="circle-cmp app__flex" key={`circle-${index}`}>
    //         <img src={circle} alt="circle" />
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>
  );
};

export default AppWrap(Header, "home");
