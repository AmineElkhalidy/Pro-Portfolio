import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.facebook.com/amine.elkhalidy.73/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/AmineElkhalidy"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://wa.me/+212611154307" target="_blank" rel="noreferrer">
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
