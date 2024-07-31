import React, { Component } from "react";
import classnames from "classnames";
import ReactDOM from "react-dom";
import styles from "./style.module.css";
import { ButtonBase, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import { ArrowBackIos, Close } from "@mui/icons-material";

class ResizablePanels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      delta: 0,
    };
    this.resizePanel = this.resizePanel.bind(this);
    this.stopResize = this.stopResize.bind(this);
  }

  componentDidMount() {
    // ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel);
    const temp = window.document.getElementsByTagName("body")[0];
    temp.addEventListener("mousemove", this.resizePanel);
    temp.addEventListener("mouseup", this.stopResize);
    // ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize);
    // ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize);
  }
  componentWillUnmount() {
    const temp = window.document.getElementsByTagName("body")[0];
    temp.removeEventListener("mousemove", this.resizePanel);
    temp.removeEventListener("mouseup", this.stopResize);
  }

  startResize = (event, index) => {
    this.setState({
      isDragging: true,
      currentPanel: true,
      initialPos: event.clientX,
    });
  };

  stopResize = (e) => {
    if (this.state.isDragging) {
      this.setState(({ panels, currentPanel, delta }) => ({
        isDragging: false,
        currentPanel: false,
        // delta: 0,
      }));
    }
  };

  resizePanel = (event) => {
    if (this.state.isDragging) {
      const tempWidth = window.innerWidth - event.clientX;
      if (tempWidth < 400 || tempWidth + 280 >= window.innerWidth) {
        // this.stopResize();
      } else {
        // const delta = event.clientX - this.state.initialPos;

        this.setState(
          {
            delta: event.clientX,
          },
          () => {
            this.props.handleWidth(event.clientX);
          }
        );
      }
    }
  };

  render() {
    return (
      <div
        onMouseDown={(e) => this.startResize(e)}
        style={
          this.state.currentPanel
            ? { position: "fixed", left: this.state.delta }
            : {}
        }
        className={styles.resizer}
      ></div>
    );
  }
}

const ModalOverlay = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className={styles.modalOverlay} onClick={onClose}></div>
  ) : null;
};

class SidePanelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      delta: 0,
    };
    this._handleOpen = this._handleOpen.bind(this);
    this._handleWidth = this._handleWidth.bind(this);
  }

  _handleWidth(data) {
    this.setState({
      delta: data,
    });
  }

  _handleOpen() {
    this.props.handleToggle();
    // window.location.reload()
  }

  render() {
    const { theme } = this.props;

    const tempStyle = {
      width:
        this.state.delta == 0 || !this.props.open
          ? "calc(45vw)"
          : window.innerWidth - this.state.delta,
      height: "100%",
      backgroundColor: theme.palette.NavHeadColor,
      color: theme.palette.textColor,
      top: "0px",
      position: "fixed",
      zIndex: "9",
    };
    if (this.props.side == "left") {
      tempStyle["left"] = this.props.open ? "0px" : "calc(-45vw)";
    } else {
      tempStyle["right"] = this.props.open ? "0px" : "calc(-45vw)";
    }
    return (
      <>
        <ModalOverlay isOpen={this.props.open} onClose={this._handleOpen} />
        <div
          className={classnames(
            !this.props.open ? styles.LPTransition : "",
            styles.noScrollbar
          )}
          style={tempStyle}
        >
          <ResizablePanels handleWidth={this._handleWidth} />
          <div
            className={styles.noScrollbar}
            style={{
              // overflow:"auto",
              overflowX: "hidden",
              overflowY: "scroll",
              width: "calc(100% - 20px)",
              height: "calc(100% - 20px)",
              padding: "10px",
            }}
          >
            <div className={styles.sideUpper}>
              <ButtonBase className={styles.btnIcon} onClick={this._handleOpen}>
                <ArrowBackIos color={"action"} />
              </ButtonBase>
              <div style={{ padding: "0px 0px", flex: 1 }}>
                {/* <h3 style={{}}>
                            {this.props.title}
                        </h3> */}
                <Typography variant="h4" color={theme.palette.text.primary}>
                  {" "}
                  {this.props.title}
                </Typography>
              </div>
            </div>

            {this.props.children}
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default withTheme(SidePanelComponent);
