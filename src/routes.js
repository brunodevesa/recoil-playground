import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages

import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Counter from "./Components/Counter/Counter";

export default function Routes() {
  return (
    <Switch>
      {<Redirect exact from="/" to="/home" />}

      <Route exact path="/home" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/error" component={ErrorPage} />
      {/*     
      <Route exact path="/shows" component={ShowComponent} />
      <Route exact path="/shows/:id1/season/:id2/episode/:id3" component={DetailsComponent} /> */}
      {/* more routes here  */}

      <Redirect to="/error" />
    </Switch>
  );
}
