import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }
  render() {
    return (
      <div>
        {this.props.children}
        <input
          type="text"
          value={this.props.inputField}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Search;
