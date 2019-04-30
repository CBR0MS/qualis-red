import React from "react";

import { Link } from "gatsby";

import "../style/main.scss";

const Footer = props => (
    <div className="footer">
        <span className="footer-text">
            <a href="https://christianbroms.com" className="footer-link">
                Copyright &copy; {new Date().getFullYear()} Christian Broms
            </a>
        </span>
        <span className="footer-text">
            <Link to="/" className="footer-link">
                Home
            </Link>
        </span>
        <span className="footer-text">
            <Link to="/about" className="footer-link">
                About
            </Link>
        </span>
    </div>
);

export default Footer;
