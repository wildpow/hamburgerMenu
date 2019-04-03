import React, { useState } from "react";
import styled, { css } from "styled-components";

const Line1Active = css`
  transform: translateY(25px) translateX(0) rotate(45deg);
`;
const Line2Active = css`
  transform: translateY(-25px) translateX(0) rotate(-45deg);
`;
const Ham = styled.div`
  cursor: pointer;
  width: 100px;
  height: 50px;
  position: relative;
  display: block;
  margin: 100px auto 50px auto;
`;

const Line = styled.span`
  display: block;
  background: black;
  width: 100px;
  height: 50px;
  position: absolute;
  left: 0;
  border-radius: 4px;
  transition: all 0.4s;
`;
const Line1 = styled(Line)`
  top: 0;
  height: 8px;
  transform: ${props => (props.hover ? "translateY(-4px)" : "translateY(0)")};
  ${props => props.open && Line1Active};
  background-color: #eb1c24;
`;
const Line2 = styled(Line)`
  top: 50%;
  height: 8px;
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? "translateX(-16px)" : "none")};
  background-color: #1565c0;
`;
const Line3 = styled(Line)`
  top: 100%;
  height: 8px;
  transform: ${props => (props.hover ? "translateY(4px)" : "translateY(0)")};
  ${props => props.open && Line2Active};
  background-color: #eb1c24;
`;

const MenuButton = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <Ham
      href="#"
      title="Menu"
      onClick={() => setOpen(!open)}
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
    >
      <Line1 open={open} hover={hover} />
      <Line2 open={open} hover={hover} />
      <Line3 open={open} hover={hover} />
    </Ham>
  );
};

export default MenuButton;
