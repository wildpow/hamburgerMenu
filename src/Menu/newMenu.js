import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${props => (props.open ? "300px" : 0)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1565c0;
  opacity: 0.95;
  color: #fafafa;
  transition: width 0.3s ease;
  z-index: 2;
  padding-top: 6rem;
`;

const Menu = ({ open, children }) => (
  <Container open={open}>{open ? children : null}</Container>
);

export default Menu;
