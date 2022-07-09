import { Component } from "react";
class Button extends Component {
  render() {
    return (
      <div className="btn-container">
        <div class="center">
          <button className="btn"><svg width="100px" height="40px" viewBox="0 0 100 40" >
            <polyline points="99,1 99,39 1,39 1,1 99,1" class="bg-line" />
            <polyline points="99,1 99,39 1,39 1,1 99,1" class="hl-line" />
          </svg>Click</button>
        </div>
      </div>
    )
  }
}

export default Button;
