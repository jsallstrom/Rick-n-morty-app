import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage";
import EpisodePage from "../components/EpisodePage";
import FavPage from "../components/FavPage";

import AboutPage from "../components/AboutPage";

import NavBar from "../components/NavBar";

// Use Hashrouter instead of BrowserRouter to be able to refresh website without getting "Cannot GET /" Problem
export default function AppRouter() {
     return (
          <BrowserRouter>
               <NavBar />
               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
                    <Route path="/episode/:id" component={EpisodePage}></Route>
                    <Route path="/favourites" component={FavPage}></Route>
                    <Route path="/about" component={AboutPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
