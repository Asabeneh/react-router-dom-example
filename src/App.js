import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';


const Home = (props) => <h1> My Home is in {props.location},{props.country}</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const Error = () => <h1> It is Not Found</h1>;
const LogIn = () => <h1>Please login</h1>


const User = (props) =>  {
  let username = props.username;
  return <div>
      <h1>Welcome {username}</h1>;
    </div>;
}


const Navbar = props => {
  return (
    <ul>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      <li>
        <NavLink to="/user/Asabeneh">User Asabeneh</NavLink>
      </li>
      <li>
        <NavLink to="/user/John">User John</NavLink>
      </li>
    </ul>
  );
};





class App extends Component {
  state = {
    loggedIn:false
  }

  handleLogin = () => {
    this.setState(prevState => ({
      loggedIn:!prevState.loggedIn
    }))
  }

  render() {
    return <div className="App">
        <Router>
          <div>
            <Navbar />
            <Prompt
             when={!this.state.loggedIn}
             message = {(props,location) => {
               let page = props.pathname.slice(1);
               console.log(props)
               return `Are you sure you like to leave the ${page} page?`;
             }}
            />
 
            <button onClick={this.handleLogin}>
              {this.state.loggedIn ? "Log out" : "Log In"}
            </button>
            <Switch>
              <Route exact path="/" render={() => {
                  return <Home location="Helsinki" country="Finland" />;
                }} />
              <Route exact strict path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={LogIn} />
              <Route path="/user/:username" render={({ match }) => {
                  return this.state.loggedIn ? <User username={match.params.username} /> : <Redirect to="/login" />;
                }} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </div>;
  }
}

export default App;
