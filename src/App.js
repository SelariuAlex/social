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
import { UserPlaces } from "./places/pages/UserPlaces";
import { UpdatePlace } from "./places/pages/UpdatePlace";
import { Auth } from "./users/pages/Auth";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users}></Route>
          <Route exact path="/:userId/places" component={UserPlaces}></Route>
          <Route exact path="/places/new" component={NewPlace}></Route>
          <Route exact path="/places/:placeId" component={UpdatePlace}></Route>
          <Route exact path="/auth" component={Auth}></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
