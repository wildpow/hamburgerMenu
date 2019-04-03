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
  :focus {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const MenuIcon = styled.line`
  display: block;
  cursor: pointer;
  color: white;
  transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
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
const Bar2 = styled(MenuIcon)`
  transform: ${props => (props.toggle ? "rotate(45deg)" : "rotate(0deg);")};
`;
const Bar3 = styled(MenuIcon)`
  transform: ${props => (props.toggle ? "rotate(-45deg)" : "rotate(0deg);")};
`;
const Circle = styled(MenuIcon)`
  /* transition: stroke-dashoffset 0.3s linear 0.1s;
  stroke-dashoffset: ${props => (props.toggle ? " 0" : "circumference(23)")};
  stroke-dasharray: circumference(23); */
  transition: stroke-dashoffset 0.3s linear 0.1s;
  /* stroke-dashoffset: 144.51326; */
  stroke-dasharray: 144.51326;
  stroke-dashoffset: ${props => (props.toggle ? 0 : 144.51326)};

`;
// nav--open
const AnotherButton = () => {
  const [toggle, useToggle] = useState(false);
  return (
    <>
      <Nav
        href="#nav"
        toggle={toggle}
        role="button"
        aria-expanded="false"
        aria-controls="menu"
        onClick={() => useToggle(!toggle)}
      >
        {console.log(toggle)}
        <svg
          className="menuicon"
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 50 50"
        >
          <title>Toggle Menu</title>
          <g>
            <Bar3 x1="13" y1="16.5" x2="37" y2="16.5" toggle={toggle} />
            <Bar x1="13" y1="24.5" x2="37" y2="24.5" toggle={toggle} />
            <Bar x1="13" y1="24.5" x2="37" y2="24.5" toggle={toggle} />
            <Bar2 x1="13" y1="32.5" x2="37" y2="32.5" toggle={toggle} />
            <Circle as="circle" toggle={toggle} r="23" cx="25" cy="25" />
          </g>
        </svg>
      </Nav>
    </>
  );
};

export default AnotherButton;
