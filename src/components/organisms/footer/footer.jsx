import React from "react";
import "./footer.css";

const Footer = ({}) => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Landing page, Inc. &middot;{" "}
        <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a>
      </p>
    </footer>
  );
};

export default Footer;
