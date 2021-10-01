import React from "react";

export default class UserName extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = { uname: "" };

  render() {
    return (
      <div className="uname">
        <p>{this.state.uname}</p>
        <input value={this.state.uname} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ uname: event.target.value });
  }
}
