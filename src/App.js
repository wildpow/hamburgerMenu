import React from "react";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import styled, { keyframes } from "styled-components";

export const Appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const SlideIn = keyframes`
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Shrink = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
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
    const styles = {
      container: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center"
        // background: "white",
        // width: "100%",
        // color: "white"
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease"
      }
    };
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

    return (
      <div>
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="black"
          />
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        <h1>hello</h1>
        <div style={styles.body}>{/* <Footer name="Menu" /> */}</div>
      </div>
    );
  }
}

export default App;
