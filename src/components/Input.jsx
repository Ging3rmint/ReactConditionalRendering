import React from "react";

function Input(props) {
  let password1;
  let password2;

  function handleOnChange(event) {
    if (event.target.type === "password") {
      switch (event.target.placeholder) {
        case "Password":
          password1 = event.target.value;
          break;
        case "Confirm Password":
          password2 = event.target.value;
          break;
        default:
          break;
      }
      if (password1 !== password2) {
        console.log("Passwords are not the same!");
      }
    }
  }

  return (
    <input
      onChange={handleOnChange}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
