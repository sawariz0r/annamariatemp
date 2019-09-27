import React from "react";
import HomePage from "./../home";
import { Switch, Route, Router } from "./../../util/router.js";
import "./styles.scss";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route
          component={({ location }) => {
            return (
              <div
                style={{ padding: "50px", width: "100%", textAlign: "center" }}
              >
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
