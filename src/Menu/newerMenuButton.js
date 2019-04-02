import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 37px;
  width: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`;

const Line = styled.div`
  height: 7px;
  width: 45px;
  transition: all 0.2s ease;
`;
const LineTop = styled(Line)`
  transform: ${props =>
    props.open ? "translateY(-1px) rotate(45deg)" : "none"};
  transform-origin: top left;
  margin-bottom: 8px;
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;

const LineMiddle = styled(Line)`
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? "translateX(-16px)" : "none")};
  background-color: ${props => (props.open ? "white" : "#1565c0")};
`;

const LineBottom = styled(Line)`
  transform: ${props =>
    props.open ? "translateX(-5px) rotate(-45deg)" : "none"};
  transform-origin: top left;
  margin-top: 8px;
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;
const MenuButton = ({ open, onClick }) => (
  <Container onClick={onClick}>
    <LineTop open={open} />
    <LineMiddle open={open} />
    <LineBottom open={open} />
  </Container>
);

export default MenuButton;
