import React, { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import "./Footer.scss";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [state, handleSubmit] = useForm("mdobayly");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Get in touch with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:a.amineelkhalidy@gmail.com">
            a.amineelkhalidy@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +212 611154307">+212 611154307</a>
        </div>

        <div className="app__footer-card">
          <div className="app__footer-social">
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
              <a href="https://wa.link/576ksc" target="_blank" rel="noreferrer">
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          action="https://formspree.io/f/mdobayly"
          method="POST"
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              id="name"
              name="name"
              onChange={handleChangeInput}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              value={email}
              id="email"
              name="email"
              onChange={handleChangeInput}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              id="message"
              name="message"
              onChange={handleChangeInput}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            className="p-text"
            onClick={handleSubmitForm}
            disabled={state.submitting}
          >
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for your message, I will get in touch with you soon.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
