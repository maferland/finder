import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './page/Home';

const App = () => {
  const netlifyIdentity = window.netlifyIdentity;
  const [user, setUser] = React.useState(netlifyIdentity.currentUser());
  netlifyIdentity.on('login', user => setUser(user));
  netlifyIdentity.on('logout', () => setUser(null));
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li data-netlify-identity-button></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
