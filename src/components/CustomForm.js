import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

const CustomForm = ({ text, violet }) => {
  const [width, setwidth] = React.useState(window.innerWidth);

  const divStyle = {
    margin: "12px 0px",
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "outlook",
        "nuevareunion",
        e.target,
        "user_10WDaw1PGl7EaUNw6tZj8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div style={{ padding: violet ? "15px" : "15px 70px" }}>
      <div
        style={{
          marginTop: "70px",
          textAlign: "left",
          padding: width > 435 ? "15px 70px" : "15px 30px",
        }}
        className={violet ? "bg-violet forms-land " : "bg-black forms-land"}
      >
        <h2
          style={{ margin: "0", fontSize: "25px" }}
          className={violet ? "white" : "lblue"}
        >
          {text.title}
        </h2>
        <form
          className={violet ? "form-home fh-violet" : "form-home fh-black"}
          onSubmit={sendEmail}
        >
          <div style={divStyle}>
            <label
              className="input-label"
              htmlFor={
                violet
                  ? text.label1.replace(" ", "")
                  : text.label1.replace(" ", "") + 2
              }
            >
              {text.label1}
            </label>
            <input
              className="input-f"
              id="nombre"
              aria-describedby="my-helper-text"
              required="true"
              name="nombre"
            />
          </div>
          <div style={divStyle}>
            <label
              className="input-label"
              htmlFor={
                violet
                  ? text.label2.replace(" ", "")
                  : text.label2.replace(" ", "") + 2
              }
            >
              {text.label2}
            </label>
            <input
              className="input-f"
              id="email"
              aria-describedby="my-helper-text"
              required="true"
              name="email"
            />
          </div>
          <div style={divStyle}>
            <label
              className="input-label"
              htmlFor={
                violet
                  ? text.label3.replace(" ", "")
                  : text.label3.replace(" ", "") + 2
              }
            >
              {text.label3}
            </label>
            <input
              className="input-f"
              id="numero"
              aria-describedby="my-helper-text"
              required="true"
              name="numero"
            />
          </div>
          <div style={divStyle}>
            <label
              className="input-label"
              htmlFor={
                violet
                  ? text.label4.replace(" ", "")
                  : text.label4.replace(" ", "") + 2
              }
            >
              {text.label4}
            </label>
            <input
              className="input-f"
              id="empresa"
              aria-describedby="my-helper-text"
              required="true"
              name="empresa"
            />
          </div>
          <div style={divStyle}>
            <label
              className="input-label"
              htmlFor={
                violet
                  ? text.label5.replace(" ", "")
                  : text.label5.replace(" ", "") + 2
              }
            >
              {text.label5}
            </label>
            <input
              className="input-f"
              id="mensaje"
              aria-describedby="my-helper-text"
              required="true"
              name="mensaje"
            />
          </div>
          <Button
            type="submit"
            style={{
              color: "white",
              fontSize: "20px",
              backgroundColor: "#34B2E7",
              margin: "auto",
              minWidth: "180px",
            }}
          >
            {text.button}
          </Button>
        </form>
      </div>
    </div>
  );
};
export default CustomForm;
