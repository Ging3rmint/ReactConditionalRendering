import React from "react";
import Input from "./Input";

const userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!userIsRegistered && (
          <Input type="password" placeholder="Confirm password" />
        )}

        <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}

export default App;
