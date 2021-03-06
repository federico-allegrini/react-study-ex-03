import React, { Component } from "react";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import NoMatch from "./components/NoMatch/NoMatch";

import "./App.css";

class App extends Component {
  render() {
    return (
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
        <Switch>
          <Route path="/users" component={Users} />
          {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
