import React, { Component } from "react";

import "./Item.css";

import ReadMore from "../ReadMore/ReadMore";
import PopUp from "../PopUp/PopUp";

class Item extends Component {
  state = {
    isDeleting: false,
    isEditting: false,
    nameInput: "",
    descriptionInput: "",
    priceInput: "",
  };

  handleOnChange = (target, inputType) => {
    this.setState({ [inputType]: target.value }, () =>
      console.log(this.state[inputType])
    );
  };

  handleUpdateClick = () => {
    this.props.handleUpdate(
      this.props.id,
      this.state.nameInput ? this.state.nameInput : this.props.name,
      this.state.descriptionInput
        ? this.state.descriptionInput
        : this.props.description,
      this.state.priceInput ? this.state.priceInput : this.props.price
    );
    this.setState({ nameInput: "", descriptionInput: "", priceInput: "" });
  };

  toggleIsDeleting = () => {
    this.setState((prevState) => {
      return { isDeleting: !prevState.isDeleting };
    });
  };

  toggleIsEditting = () => {
    this.setState((prevState) => {
      return { isEditting: !prevState.isEditting };
    });
  };

  render() {
    return (
      <>
        <div className="item-container">
          <h2 className="item-header">{this.props.name}</h2>
          <p className="item-description">
            <ReadMore>{this.props.description}</ReadMore>
          </p>
          <h4 className="item-price">Price: &#8362;{this.props.price}</h4>
          <div className="btns-container">
            <button className="btn" onClick={this.toggleIsEditting}>
              Edit
            </button>
            <button className="btn" onClick={this.toggleIsDeleting}>
              Delete
            </button>
          </div>
          <img
            className="item-img"
            src={this.props.img}
            alt={this.props.name}
          />
        </div>
        {this.state.isDeleting && (
          <PopUp
            text={"Are you sure you want to delete this item?"}
            noCallback={this.toggleIsDeleting}
            yesCallback={() => this.props.handleDelete(this.props.id)}
          />
        )}
        {this.state.isEditting && (
          <PopUp
            noCallback={this.toggleIsEditting}
            yesCallback={this.handleUpdateClick}
          >
            <label htmlFor="nameInput">Name: </label>
            <input
              id="nameInput"
              onChange={({ target }) => this.handleOnChange(target, target.id)}
            />
            <label htmlFor="descriptionInput">Description: </label>
            <textarea
              id="descriptionInput"
              onChange={({ target }) => this.handleOnChange(target, target.id)}
              rows="4"
              cols="40"
            />
            <label htmlFor="priceInput">Price: </label>
            <input
              id="priceInput"
              onChange={({ target }) => this.handleOnChange(target, target.id)}
            />
          </PopUp>
        )}
      </>
    );
  }
}

export default Item;
