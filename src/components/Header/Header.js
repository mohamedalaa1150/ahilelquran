import React from "react";
import Button from "../Button/Button";
import "./Header.css";
import logo from "../../assets/images/logo.png";

// import { HiOutlineSearch } from "react-icons/hi";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Header = () => {
  const myList = [
    "من نحن",
    "الخدمات",
    "المسابقات",
    "الفعاليات",
    "اتصل بنا",
  ].reverse();

  const list = myList.map((el) => <li key={el}>{el}</li>);
  return (
    <header>
      <div className="search-and-button">
        <Button name="إضافة جهة تحفيظ" />
        <span className="icon">
          {/* <HiOutlineSearch /> */}
          <lord-icon
            src="https://cdn.lordicon.com/unukghxb.json"
            trigger="hover"
            colors="primary:#e0cfab,secondary:#69b91e"
            style={{
              width: "50px",
              height: "50px",
              display: "block",
            }}
          ></lord-icon>
        </span>
      </div>
      <ul className="links">{list}</ul>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
