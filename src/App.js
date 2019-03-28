import React from "react";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import styled, { keyframes } from "styled-components";
// export const FadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1; }
// `;
export const Appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const SlideIn = keyframes`
  from { transform: translateX(20%); }
  to { transform: translateX(0); }
`;

export const Shrink = keyframes`
  0% {width: 0%; }
  100% { width: 90%; }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  filter: ${props => (props.menuOpen ? "blur(2px)" : null)};
  transition: filter 0.5s ease;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
  opacity: 0.9;
  display: flex;
  align-items: center;
  top: 20;
  right: 20;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const menu = [
      "Home",
      "Sale",
      "Brands",
      "Adjustable",
      "Financing",
      "Our Blog",
      "About Us",
      "Warranty",
      "Policies",
      "Site Map"
    ];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.05}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });
    const { menuOpen } = this.state;
    return (
      <div>
        <ButtonContainer>
          <MenuButton
            open={menuOpen}
            onClick={() => this.handleMenuClick()}
            // color="black"
          />
        </ButtonContainer>
        <Menu open={menuOpen}>{menuItems}</Menu>

        <Body menuOpen={menuOpen}>
          <h1>hello</h1>
        </Body>
      </div>
    );
  }
}

export default App;
