import React, { useState } from "react";
import styled, { css } from "styled-components";

const Line1Active = css`
  transform: translateY(10px) translateX(0) rotate(45deg);
`;
const Line2Active = css`
  transform: translateY(-10px) translateX(0) rotate(-45deg);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const Span = styled.span`
  /* font-size: 1.05rem; */
  font-size: 1.65rem;
  opacity: ${props => (props.hover || props.open ? 1 : 0)};
  transition: 250ms;
  letter-spacing: 2px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  letter-spacing: 2px;
`;
const Line = styled.div`
  width: 18px;
  height: 16px;
  left: 0;
  height: 3px;
  transition: all 0.4s;
  border-radius: 4px;
  position: absolute;
  display: block;
`;
const LineTop = styled(Line)`
  top: 0;
  ${props => props.open && Line1Active};
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;

const LineMiddle = styled(Line)`
  top: 50%;
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? "translateX(-16px)" : "none")};
  background-color: ${props => (props.open ? "white" : "#1565c0")};
`;

const LineBottom = styled(Line)`
  top: 100%;
  ${props => props.open && Line2Active};
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;
const ButtonWrapper = styled.div`
  justify-self: center;
  position: relative;
  display: block;
  cursor: pointer;
  width: 18px;
  height: 14px;
  margin-top: -5px;
  /* margin-bottom: 9px; */
`;
const Try = ({ open, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
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
      <Span hover={hover}>{open ? "E" : "M"}</Span>
      <ButtonWrapper>
        <LineTop open={open} hover={hover} />
        <LineMiddle open={open} hover={hover} />
        <LineBottom open={open} hover={hover} />
      </ButtonWrapper>
      <Span hover={hover} open={open}>
        {open ? "I" : "N"}
      </Span>
      <Span hover={hover} open={open}>
        {open ? "T" : "U"}
      </Span>
    </Container>
  );
};

export default Try;
