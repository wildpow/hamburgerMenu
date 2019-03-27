import React from "react";
import App from "./App";
import "./App.css";

class Main extends React.Component {
  render() {
    const styles = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh"
      }
    };

    return (
      <div style={styles.main}>
        <App />
      </div>
    );
  }
}

export default Main;
