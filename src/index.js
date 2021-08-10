import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "Login";
import Search from "Search";
import About from "About";
import Blog from "Blog";
import Post from "Post";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={App} />    
   <Route path="/Login" component={Login} />   
   <Route path="/Search" component={Search} /> 
   <Route path="/About" component={About} /> 
   <Route path="/Blog" component={Blog} /> 
   <Route path="/Post" component={Post} />   
 </Switch>
 </BrowserRouter>,
 rootElement
);