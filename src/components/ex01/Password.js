import { Component } from "react";
class Password extends Component {
    render() {
        return (
            <div className="input">
                <label >
                    Password
                    <input type="password" name="password"  />
                </label>
            </div>

        );
    }
}

export default Password;