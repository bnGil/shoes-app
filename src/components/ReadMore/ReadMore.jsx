import React, { Component } from "react";

import "./ReadMore.css";

class ReadMore extends Component {
  state = { isReadMoreShown: false };

  toggleReadMore = () => {
    this.setState((prevState) => {
      return { isReadMoreShown: !prevState.isReadMoreShown };
    });
  };

  render() {
    const { children } = this.props;
    return (
      <>
        {this.state.isReadMoreShown ? children : children.substring(0, 150)}
        <span className="readmore" onClick={this.toggleReadMore}>
          ...Read More
        </span>
      </>
    );
  }
}

export default ReadMore;
