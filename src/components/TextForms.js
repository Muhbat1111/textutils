import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };
  const handleUpOnClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" Converted to UpperCase!", "success ");
  };
  const handleLoOnClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to LowerCase!", "success ");
  };
  const handleClrOnClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert(" Text Cleard!", "success ");
  };
  const handleCopyOnClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to Clipboard!", "success ");
  };
  const handleExtraSpacesOnClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces removed!", "success ");
  };

  return (
    <>
      <div
        className="container"
        style={{
          //!   Ternary Operator Condition
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div>
          <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea
              className="form-control"
              value={text}
              style={{
                //!   Ternary Operator Condition
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleUpOnClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleLoOnClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleClrOnClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleCopyOnClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleExtraSpacesOnClick}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      {/* Adding new Continer  */}
      <div
        className="container my-4"
        style={{
          //!   Ternary Operator Condition
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summmary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {
            //! Ternary Operator Condition
            text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"
          }
        </p>
      </div>
    </>
  );
}
