import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./containers/Home";
import history from "./history";

export const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;
