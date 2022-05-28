import React, { Component } from "react";

import "./Spinner.css";

class Spinner extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Spinner;
