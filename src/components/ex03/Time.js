import { Component } from "react";
import './style.css';
class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
        setInterval(this.updateTime.bind(this), 1000)
    }
    updateTime() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className='container'>
                <h1 className="title">Hello User!</h1>
                <div className='Time'>{this.state.date.toLocaleTimeString()}</div>
            </div>

        );
    }
}

export default Time;