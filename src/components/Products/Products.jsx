import React, { Component } from "react";
import Item from "../Item/Item";

import "./Products.css";

class Products extends Component {
  render() {
    return (
      <div className="products-container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default Products;
