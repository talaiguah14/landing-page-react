import React from "react";
import "./footer.css";

const Footer = ({}) => {
  return (
    <div id="Footer">
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Landing page, Inc. &middot;{" "}
        <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a>
      </p>
    </footer>
    </div>
  );
};

export default Footer;
