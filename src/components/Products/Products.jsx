import React, { Component } from "react";
import Item from "../Item/Item";
import PopUp from "../PopUp/PopUp";
import { API } from "../../api/api";
import "./Products.css";

class Products extends Component {
  state = {
    products: [],
    isSpinning: true,
    isCreating: false,
    nameInput: "",
    descriptionInput: "",
    priceInput: "",
    imgInput: "",
  };

  async componentDidMount() {
    try {
      const { data } = await API.get("/shoes");
      this.setState({ products: data, isSpinning: false });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  toggleIsCreating = () => {
    this.setState((prev) => {
      return { isCreating: !prev.isCreating };
    });
  };

  handleOnChange = (target, inputType) => {
    this.setState({ [inputType]: target.value }, () =>
      console.log(this.state[inputType])
    );
  };

  handleCreateClick = () => {
    this.handleCreate(
      this.state.nameInput,
      this.state.descriptionInput,
      this.state.priceInput,
      this.state.imgInput
    );
  };

  handleCreate = async (name, description, price, img) => {
    this.setState({ isSpinning: true });
    const newShoe = {
      name,
      description,
      price,
      img,
      id: Math.random(),
    };
    try {
      const postedData = await API.post(`/shoes`, newShoe);
      this.setState((prev) => {
        return {
          products: [...prev.products, postedData.data],
          nameInput: "",
          descriptionInput: "",
          priceInput: "",
          imgInput: "",
          isSpinning: false,
          isCreating: false,
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleUpdate = async (id, newName, newDesc, newPrice) => {
    this.setState({ isSpinning: true });
    const shoeToUpdate = this.state.products.find((shoe) => shoe.id === id);
    const updatedShoe = {
      ...shoeToUpdate,
      name: newName,
      description: newDesc,
      price: newPrice,
    };
    try {
      const { data } = await API.put(`/shoes/${id}`, updatedShoe);
      this.setState((prev) => {
        return {
          products: prev.products.map((shoe) => {
            if (shoe.id === id) {
              return data;
            }
            return shoe;
          }),
          isSpinning: false,
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleDelete = async (id) => {
    this.setState({ isSpinning: true });
    try {
      const deletedShoe = await API.delete(`/shoes/${id}`);
      this.setState((prev) => {
        const newProducts = prev.products.filter(
          (shoe) => shoe.id !== deletedShoe.data.id
        );
        return { products: newProducts, isSpinning: false };
      });
    } catch (e) {
      console.log(e);
    }
  };

  paintProducts = (products) => {
    return products.map(({ name, description, price, img, id }) => {
      return (
        <Item
          key={id}
          name={name}
          description={description}
          price={price}
          img={img}
          id={id}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
      );
    });
  };

  render() {
    return (
      <>
        {this.state.isSpinning ? (
          <h1>Spinner</h1>
        ) : (
          <div className="products-page">
            <button className="btn" onClick={this.toggleIsCreating}>
              New Shoe
            </button>
            <div className="products-container">
              {this.paintProducts(this.state.products)}
            </div>
          </div>
        )}
        {this.state.isCreating && (
          <PopUp
            noCallback={this.toggleIsCreating}
            yesCallback={this.handleCreateClick}
          >
            <div className="create-container">
              <label htmlFor="nameInput">Name: </label>
              <input
                id="nameInput"
                onChange={({ target }) =>
                  this.handleOnChange(target, target.id)
                }
              />
              <label htmlFor="descriptionInput">Description: </label>
              <textarea
                id="descriptionInput"
                onChange={({ target }) =>
                  this.handleOnChange(target, target.id)
                }
                rows="4"
                cols="40"
              />
              <label htmlFor="priceInput">Price: </label>
              <input
                id="priceInput"
                onChange={({ target }) =>
                  this.handleOnChange(target, target.id)
                }
              />
              <label htmlFor="imgInput">Image URL: </label>
              <input
                id="imgInput"
                onChange={({ target }) =>
                  this.handleOnChange(target, target.id)
                }
              />
            </div>
          </PopUp>
        )}
      </>
    );
  }
}

export default Products;
