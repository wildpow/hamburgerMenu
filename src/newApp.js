import React from "react";
import delayUnmounting from "./new";
import styled, { css, keyframes } from "styled-components";
import Menu from "./newMenu";

export const SlideIn = keyframes`
  from { transform: translateX(80%); }
  to { transform: translateX(0); }
`;
export const SlideOut = keyframes`
  from { transform: translateX(0);}
  to { transform: translateX(80%);}
`;
const animateIn = css`
  animation: ${SlideIn} 0.6s;
`;
const animateOut = css`
  animation: ${SlideOut} 0.6s;
`;
const BoxWrapper = styled.div`
  ${props => (props.isMounted ? animateIn : animateOut)};
  animation-delay: ${props => props.stuff};
`;
const Items = ["Test", "Test2", "Test3", "Test4"];
function TestItems(props) {
  return (
    <>
      {Items.map((item, index) => (
        <BoxWrapper
          stuff={`${index * 0.05}s`}
          isMounted={props.isMounted}
          delay={props.delay * index}
          key={props.delay * index}
        >
          <h1>{item}</h1>
        </BoxWrapper>
      ))}
    </>
  );
}
const DelayedComponent = delayUnmounting(TestItems);

class App extends React.Component {
  state = {
    isMounted: false
  };

  toggle = () => {
    this.setState(state => ({ isMounted: !state.isMounted }));
  };
  readyToClose = () => {
    this.state({ isMounted: false });
  };
  render() {
    return (
      <div>
        <Menu open={this.state.isMounted}>
          <DelayedComponent
            delayTime={500}
            isMounted={this.state.isMounted}
            readyToClose={this.readyToClose}
          />
        </Menu>
        <button type="button" onClick={this.toggle}>
          Open Test
        </button>
      </div>
    );
  }
}
export default App;
