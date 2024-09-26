import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>you clicked {this.state.count} times</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default Counter;
