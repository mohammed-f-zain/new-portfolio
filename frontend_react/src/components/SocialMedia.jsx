import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/SaeedFwaz_XO">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/saeed.fwaz.5">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/saeedfwaz/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
