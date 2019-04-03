import React, { useState } from "react";
import styled, { css } from "styled-components";

const Nav = styled.div`
  /* position: absolute; */
  /* top: 25px;
  right: 25px; */
  cursor: pointer;
  color: #212121;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 600;
  /* color: black;
  width: 200px;
  height: 200px; */
`;
const Span = styled.span`
  /* font-size: 1.05rem; */
  font-size: 1.65rem;
  opacity: ${props => (props.hover || props.open ? 1 : 0)};
  transition: 250ms;
  letter-spacing: 2px;
  height: 19px;
  width: 26px;
`;
const Bar = styled.span`
  transition: 250ms;
  position: relative;
  display: block;
  background: #212121;
  /* border-radius: 2px; */
  /* border-bottom: 1px solid #212121; */
  width: 27px;
  height: 4px;
  &:nth-child(1) {
    ${props => (props.open ? Bar1 : null)};
  }
  &:nth-child(2) {
    margin: 4px 0;
    ${props => (props.open ? Bar2 : null)};
  }
  &:nth-child(3) {
    ${props => (props.open ? Bar3 : null)};
  }
`;
const Line = styled.span``;
const Bar1 = css`
  transition: 250ms;
  transform: rotate(45deg);
  top: 7px;
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;
const Bar2 = css`
  opacity: 0;
  transition: 250ms;
  background-color: ${props => (props.open ? "white" : "#1565c0")};
`;
const Bar3 = css`
  transition: 250ms;
  transform: rotate(-45deg);
  bottom: 9px;
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;
const E = styled.span`
  display: inline-block;
  height: 19px;
  width: 26px;
  padding-right: 3px;
  /* &:nth-child(2) {
    margin: 3px 0;
  } */
`;
const Try = ({ open, onClick }) => {
  // const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <Nav
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <Span hover={hover} open={open}>
        {open ? "E" : "M"}
      </Span>
      <E class="e">
        <Bar open={open} />
        <Bar open={open} />
        <Bar open={open} />
      </E>
      <Span hover={hover} open={open}>
        {open ? "I" : "N"}
      </Span>
      <Span hover={hover} open={open}>
        {open ? "T" : "U"}
      </Span>
    </Nav>
  );
};

export default Try;
