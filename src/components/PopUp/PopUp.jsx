import React, { Component } from "react";

import "./PopUp.css";

class PopUp extends Component {
  render() {
    return (
      <div className="popup-container">
        <div className="popup-card">
          <h3>{this.props.text}</h3>
          {this.props.children}
          <div className="btns-container">
            <button className="popup-btn" onClick={this.props.yesCallback}>
              Confirm
            </button>
            <button className="popup-btn" onClick={this.props.noCallback}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
