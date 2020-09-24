import React from "react";
import "./Nav.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar__logo">
          <h1>FashionTrend.</h1>
        </div>
        <ul className="navbar__list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="navbar__option">
          <SearchIcon />
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="navbar__btn">
          <MenuIcon />
        </div>
      </nav>
    </section>
  );
}

export default Nav;
