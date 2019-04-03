import React, { useState } from "react";
import styled, { css } from "styled-components";

const Nav = styled.div`
  /* position: absolute; */
  top: 125px;
  right: 125px;
  cursor: pointer;
  color: #212121;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  /* color: black;
  width: 200px;
  height: 200px; */
`;
const Span = styled.span`
  /* font-size: 1.05rem; */
  font-size: 1.45rem;
  opacity: ${props => (props.hover || props.open ? 1 : 0)};
  transition: 250ms;
  letter-spacing: 2px;
`;
const Bar = styled.span`
  transition: 250ms;
  position: relative;
  display: block;
  background: #212121;
  border-radius: 1px;
  border-bottom: 1px solid #212121;
  width: 15px;
  height: 1px;
  &:nth-child(1) {
    ${props => (props.open ? Bar1 : null)};
  }
  &:nth-child(2) {
    margin: 3px 0;
    ${props => (props.open ? Bar2 : null)};
  }
  &:nth-child(3) {
    ${props => (props.open ? Bar3 : null)};
  }
`;
const Bar1 = css`
  transition: 250ms;
  transform: rotate(45deg);
  top: 5px;
`;
const Bar2 = css`
  opacity: 0;
  transition: 250ms;
`;
const Bar3 = css`
  transition: 250ms;
  transform: rotate(-45deg);
  bottom: 5px;
`;
const E = styled.span`
  display: inline-block;
  height: 12px;
  width: 17px;
  /* &:nth-child(2) {
    margin: 3px 0;
  } */
`;
const Try = ({ open, onClick }) => {
  // const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <Nav
      class="toggle-nav"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <Span hover={hover} open={open} class="m">
        {open ? "E" : "M"}
      </Span>
      <E class="e">
        <Bar class="bar" open={open} />
        <Bar class="bar" open={open} />
        <Bar class="bar" open={open} />
      </E>
      <Span hover={hover} open={open} class="n">
        {open ? "I" : "N"}
      </Span>
      <Span hover={hover} open={open} class="u">
        {open ? "T" : "U"}
      </Span>
    </Nav>
  );
};

export default Try;
