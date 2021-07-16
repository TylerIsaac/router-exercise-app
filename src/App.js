import './App.css';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link,
}   from "react-router-dom";

import NoMatch from './NoMatch';

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function App() {
  return (
      <Router>
          <div className="App">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
