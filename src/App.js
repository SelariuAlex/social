import React, { useState, useCallback } from "react";
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
import { AuthContext } from "./shared/context/auth-contex";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path="/" component={Users}></Route>
            <Route exact path="/:userId/places" component={UserPlaces}></Route>
            <Route exact path="/places/new" component={NewPlace}></Route>
            <Route
              exact
              path="/places/:placeId"
              component={UpdatePlace}
            ></Route>
            <Route exact path="/auth" component={Auth}></Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
