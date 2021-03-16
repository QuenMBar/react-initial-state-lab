// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount,
        };
    }

    // our increment method makes use of the 'setState' method, which is what we use to alter state
    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // };

    render() {
        if (this.state.secondsLeft != 0) {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>;
        } else {
            return <div>Boom!</div>;
        }
    }
}
