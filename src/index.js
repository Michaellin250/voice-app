import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "Login";
import Search from "Search";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={App} />    
   <Route path="/Login" component={Login} />   
   <Route path="/Search" component={Search} />   
 </Switch>
 </BrowserRouter>,
 rootElement
);