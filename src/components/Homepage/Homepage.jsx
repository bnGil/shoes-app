import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <h1 className="hp-header">Welcome to my shoes store</h1>
      </div>
    );
  }
}

export default Homepage;
