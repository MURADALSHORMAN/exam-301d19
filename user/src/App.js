'use strict';

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Main from './components/Main';
import Header from './components/Header';
import Profile from './components/Profile';

export class App extends Component {
  render() {
    return (
<div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/favorite">
            <Profile />
          </Route>
        </Switch>

      </BrowserRouter>
      </div >
    )
  }
}

export default App
