import React, { Component } from "react";
import { Link } from "react-router-dom";

import Users from "./containers/Users";
// lazy load
// import Pizza from "./containers/Pizza.js"
import asyncComponent from "./hoc/asyncComponent";

// async function with dynamic import for lazy load - only need to mount at index.js
const AsyncPizza = asyncComponent(() => {
  return import("./containers/Pizza.js");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          {/* lazy loaded */}
          <Route path="/pizza" exact component={AsyncPizza} />
        </div>
      </div>
    );
  }
}
