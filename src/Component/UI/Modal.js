import React from "react";
import ReactDOM from "react-dom";
// import PortalReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modalEle = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalEle)};
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modalEle)}
    </>
  );
};

export default Modal;
