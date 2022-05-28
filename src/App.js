import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { API } from "./api/api";

import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";

class App extends Component {
  state = { products: [] };
  async componentDidMount() {
    try {
      const { data } = await API.get("/shoes");
      this.setState({ products: data });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
