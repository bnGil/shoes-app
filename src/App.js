import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";

class App extends Component {
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
