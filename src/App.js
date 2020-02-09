import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Users } from "./users/pages/Users";
import { NewPlace } from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={Users}></Route>
        <Route exact path="/places/new" component={NewPlace}></Route>
      </Switch>
    </Router>
  );
}

export default App;
