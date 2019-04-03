import React, { useState } from "react";
import styled, { css } from "styled-components";

const Line1Active = css`
  transform: translateY(20px) translateX(0) rotate(45deg);
`;
const Line2Active = css`
  transform: translateY(-20px) translateX(0) rotate(-45deg);
`;

const Poop = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.15s linear;
  border: ${props =>
    props.open ? "1px solid rgba(0,0,0,.2)" : "1px solid transparent"};
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Container = styled.div`
  width: 70px;
  height: 40px;
  margin-bottom: 9px;
  justify-self: center;
  position: relative;
  display: block;
  cursor: pointer;
`;

const Line = styled.div`
  width: 70px;
  height: 40px;
  left: 0;
  transition: all 0.4s;
  border-radius: 4px;
  display: block;
  position: absolute;
`;
const LineTop = styled(Line)`
  top: 0;
  height: 8px;
  transform: ${props => (props.hover ? "translateY(-4px)" : "translateY(0)")};
  ${props => props.open && Line1Active};
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;

const LineMiddle = styled(Line)`
  top: 50%;
  height: 8px;
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? "translateX(-16px)" : "none")};
  background-color: ${props => (props.open ? "white" : "#1565c0")};
`;

const LineBottom = styled(Line)`
  top: 100%;
  height: 8px;
  transform: ${props => (props.hover ? "translateY(4px)" : "translateY(0)")};
  ${props => props.open && Line2Active};
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;
const MenuButton = ({ open, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <Poop hover={hover} open={open}>
      <Container
        hover={hover}
        open={open}
        onClick={onClick}
        onMouseEnter={() => {
          setHover(!hover);
        }}
        onMouseLeave={() => {
          setHover(!hover);
        }}
      >
        <LineTop open={open} hover={hover} />
        <LineMiddle open={open} hover={hover} />
        <LineBottom open={open} hover={hover} />
      </Container>
    </Poop>
  );
};

export default MenuButton;
