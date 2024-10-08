import React from "react";
import contactImage from "../assets/png/contact-photo.png";
import whatsapp from "../assets/svg/Social-3.png";
import behance from "../assets/svg/Social-1.png";
import instagram from "../assets/svg/Social.png";
import '../css/contact-page.css';

const Contact: React.FC = () => {
  return (
    <div className="w-full font-urbanist mt-20 overflow-x-hidden">
      <div className="flex items-center">
        <h1 className="font-clash-grotesk-bold text-9xl main-title">GET IN</h1>
        <div className="image-container">
          <img src={contactImage} alt="a dark picture with a rock" />
        </div>
      </div>
      <div>
        <h1 className="font-clash-grotesk-bold text-9xl -mt-6 ml-64 main-title touch-title">TOUCH</h1>
        <p className="ml-64 w-96 mt-20 description-contact">
          Let's Connect! Reach out and let the conversation begin. Your
          thoughts, questions and ideas are always welcome.
        </p>
        <p className="ml-64 w-96 mt-5 description-contact">
          For freelance gigs, event collaborations, or networking opportunities,
          get in touch with me at:
        </p>
        <p className="font-bold mt-5 ml-64 description-contact">
          <a href="mailto:elizadoltuofficial@gmail.com" target="_blank">
            elizadoltuofficial@gmail.com
          </a>
        </p>
        <div className="ml-64 mt-10 mb-20 description-contact">
          <div className="flex items-center">
            <img src={whatsapp} alt="whatsapp logo" className="mr-3"/>
            <a href="tel:+40732134019" target="_blank">WhatsApp</a>
          </div>
          <div className="flex mt-3 items-center">
            <img src={behance} alt="behance logo" className="mr-3"/>
            <a href="http://behance.net/elizadoltu/" target="_blank">Behance</a>
          </div>
          <div className="flex mt-3 items-center">
            <img src={instagram} alt="instagram logo" className="mr-3"/>
            <a href="http://instagram.com/elizadoltu.design/" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
