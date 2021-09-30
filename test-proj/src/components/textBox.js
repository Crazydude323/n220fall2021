import React from "react";

class TextBox extends React.Component {
    constructor (props) {
        super (props);
        this.text = props.text;
        this.name = props.name;
    }

    render() {
        return <p>Hello there.</p>
    }
}