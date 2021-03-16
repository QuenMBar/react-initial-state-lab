// your ImageSlider code here!
import React, { Component } from "react";

export default class ImageSlider extends Component {
    // we use the constructor to set the INITIAL STATE
    constructor() {
        super();
        this.state = {
            currentSlideIndex: 0,
        };
    }

    // our increment method makes use of the 'setState' method, which is what we use to alter state
    increment = () => {
        this.setState({
            currentSlideIndex: this.state.currentSlideIndex + 1,
        });
    };

    render() {
        return <div onClick={this.increment}>I am on slide {this.state.currentSlideIndex}</div>;
    }
}
