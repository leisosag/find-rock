import React from "react";
import PageSearchResult from "./page-search-results.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./components/layout.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PageHome}></Route>
          <Route exact path="/busqueda" component={PageSearchResult}></Route>
          <Route exact path="/artista" component={PageArtist}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
