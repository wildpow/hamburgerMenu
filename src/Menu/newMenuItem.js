import React from "react";
import styled, { keyframes } from "styled-components";

const Appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const SlideIn = keyframes`
  from { transform: translateX(20%); }
  to { transform: translateX(0); }
`;
const Container = styled.div`
  opacity: 0;
  animation: 1s ${Appear} forwards;
  animation-delay: ${props => props.delay};
`;

const MenuItems = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1.8rem;
  padding: 1rem 0;
  margin: 0 5%;
  cursor: pointer;
  color: #fafafa;
  transition: color 0.2s ease-in-out;
  animation: 0.5s ${SlideIn} forwards;
  animation-delay: ${props => props.delay};
  :hover {
    color: gray;
  }
`;

const MenuItem = ({ delay, onClick, children }) => (
  <Container delay={delay}>
    <MenuItems delay={delay} onClick={onClick}>
      {children}
    </MenuItems>
    {/* <div style={styles.line} /> */}
  </Container>
);

export default MenuItem;
