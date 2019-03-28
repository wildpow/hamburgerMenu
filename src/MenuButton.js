import React from "react";

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        // height: "37px",
        // width: "47px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px"
      },
      line: {
        height: "7px",
        width: "45px",
        transition: "all 0.2s ease"
      },
      lineTop: {
        transform: this.state.open ? "translateY(-1px) rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "8px",
        backgroundColor: this.state.open ? "white" : "#eb1c24"
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
        backgroundColor: this.state.open ? "white" : "#1565c0"
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-5px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "8px",
        backgroundColor: this.state.open ? "white" : "#eb1c24"
      }
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

export default MenuButton;
