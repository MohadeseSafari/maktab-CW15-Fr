import { Component } from "react";
class Username extends Component {
  render() {
    return (
      <div className="input">
        <label>Username<input type="text" name="username"/></label>
      </div>
    );
  }
}

export default Username;
