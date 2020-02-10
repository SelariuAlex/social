import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Users } from "./users/pages/Users";
import { NewPlace } from "./places/pages/NewPlace";
import { MainNavigation } from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users}></Route>
          <Route exact path="/places/new" component={NewPlace}></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
