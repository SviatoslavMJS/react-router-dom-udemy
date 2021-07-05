import React, { Component } from 'react'
import './App.scss'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="wfm-active"
              >Home</NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                activeStyle={{
                  fontWeight: 'bold',
                  color: "blue"
                }}
              >About</NavLink>
            </li>

            <li>
              <NavLink
                to={{
                  pathname: "/cars",
                  search: "?a=1&b=2",
                  hash: "#wfm-hash"
                }}
              >Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route path="/about" component={About} />
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          {/* <Route render={() => <h1 style={{color: "red", textAlign: "center"}}>404 Not Found</h1>}/>   */}
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App
