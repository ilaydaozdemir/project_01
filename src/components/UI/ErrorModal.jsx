import React from "react";
import style from "../UI/ErrorModal.module.css";
import Button from "@mui/material/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm} />

      <div className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>{props.message}</div>
        <footer className={style.actions}>
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            onClick={props.onConfirm}
          >
            Okey
          </Button>
        </footer>
      </div>
    </div>
  );
};
export default ErrorModal;
