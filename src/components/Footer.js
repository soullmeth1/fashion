import React from "react";
import "./Footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <div>
            <p>Follow us :</p>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
          <article>
            <ul>
              <li>
                <a href="#">How to get join</a>
              </li>
              <li>
                <a href="#">Get discount</a>
              </li>
              <li>
                <a href="#">Provitable</a>
              </li>
              <li>
                <a href="#">Become a partner</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </article>
        </div>
        <div className="footer__bottom">
          <p>Copyright 2020. Jakarta - Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
