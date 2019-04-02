import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.a`
  display: inline-block;
  position: absolute;
  z-index: 10;
  padding: 0;
  border: 0;
  background: transparent;
  outline: 0;
  right: 15px;
  top: 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.15s linear;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const MenuIcon = styled.line`
  display: block;
  cursor: pointer;
  color: white;

  transform: rotate(0deg);
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
`;
const Bar = styled(MenuIcon)`
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-in-out;
`;

const Circle = styled(MenuIcon)`
  transition: stroke-dashoffset 0.3s linear 0.1s;
  stroke-dashoffset: circumference(23);
  stroke-dasharray: circumference(23);
`;
// nav--open
const AnotherButton = () => {
  const [toggle, useToggle] = useState("");
  return (
    <>
      <div class="viewport">
        <header class="header" role="banner">
          <nav id="nav" class="nav" role="navigation">
            <ul
              class="nav__menu"
              id="menu"
              tabindex="-1"
              aria-label="main navigation"
              hidden
            >
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Home
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Shop
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Blog
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  About
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#nav"
              className={`nav__toggle ${toggle}`}
              role="button"
              aria-expanded="false"
              aria-controls="menu"
              onClick={() => useToggle("nav--open")}
            >
              <svg
                className="menuicon"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <title>Toggle Menu</title>
                <g>
                  <line
                    className="menuicon__bar"
                    x1="13"
                    y1="16.5"
                    x2="37"
                    y2="16.5"
                  />
                  <line
                    className="menuicon__bar"
                    x1="13"
                    y1="24.5"
                    x2="37"
                    y2="24.5"
                  />
                  <line
                    className="menuicon__bar"
                    x1="13"
                    y1="24.5"
                    x2="37"
                    y2="24.5"
                  />
                  <line
                    className="menuicon__bar"
                    x1="13"
                    y1="32.5"
                    x2="37"
                    y2="32.5"
                  />
                  <circle className="menuicon__circle" r="23" cx="25" cy="25" />
                </g>
              </svg>
            </a>
            <div className="splash" />
          </nav>
        </header>
        <main className="main" role="main">
          <div className="gallery" aria-label="gallery">
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
            <a href="#" className="gallery__item" />
          </div>
        </main>
      </div>
    </>
  );
};

export default AnotherButton;

{
  /* <Nav
href="#nav"
class="nav__toggle"
role="button"
aria-expanded="false"
aria-controls="menu"
>
<svg
  class="menuicon"
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 50 50"
>
  <title>Toggle Menu</title>
  <g>
    <Bar class="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
    <Bar class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
    <Bar class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
    <Bar class="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
    <Circle class="menuicon__circle" r="23" cx="25" cy="25" />
  </g>
</svg>
</Nav> */
}
