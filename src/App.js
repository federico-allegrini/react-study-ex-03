import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/courses" activeClassName="active-link">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/users" activeClassName="active-link">
                    Users
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Redirect from="/all-courses" to="/courses" />
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Route path="/" exact component={() => <h1>Home</h1>} />
            <Route component={() => <h1>Not found!</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
