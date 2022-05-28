import React, { Component } from "react";

import "./Item.css";

import ReadMore from "../ReadMore/ReadMore";

class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <h2 className="item-header">Nike Air</h2>
        <p className="item-description">
          <ReadMore>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur aspernatur in quibusdam quaerat eligendi ducimus
            reprehenderit atque esse cum quidem, laudantium ipsam incidunt
            accusantium magnam enim id. Distinctio iste a explicabo et
            voluptates amet rem ad. Tempora, repellat! Delectus libero tempore
            culpa sed repellendus voluptates molestiae earum commodi maxime id?
          </ReadMore>
        </p>
        <h3 className="item-price">Price: &#8362;499.90</h3>
        <div className="btns-container">
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
        <img
          className="item-img"
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-ZLZpmn.png"
          alt="Nike Air"
        />
      </div>
    );
  }
}

export default Item;
