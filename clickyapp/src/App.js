import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Container from "./components/container/Container"



function App() {
    return (
     <BrowserRouter>
      <Route>
      <Container />
      </Route>
     </BrowserRouter>
    )
    };
export default App;
