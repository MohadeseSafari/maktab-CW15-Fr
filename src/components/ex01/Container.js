import { Component } from "react";
import Button from "./Button";
import Password from "./Password";
import Username from "./Username";
import "./style.css";

class Container extends Component {
  render() {
    return (
        <form className="container">
          <Username />
          <Password />
          <Button />
        </form>

    );
  }
}

export default Container;
