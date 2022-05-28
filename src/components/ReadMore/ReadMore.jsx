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
    const limit = 150;
    return (
      <>
        {children.length < limit ? (
          children
        ) : (
          <>
            {this.state.isReadMoreShown
              ? children
              : children.substring(0, limit)}
            <span className="readmore" onClick={this.toggleReadMore}>
              {this.state.isReadMoreShown ? "...Read less" : "...Read more"}
            </span>
          </>
        )}
      </>
    );
  }
}

export default ReadMore;
