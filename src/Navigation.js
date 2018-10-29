import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';
import Navbar from './Navbar'
import './App.css';

const Home = (props) => <h1>Home:{props.name}:{props.place}</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const Error = () => <h1> It is Not Found</h1>;
const User = () => <h1>Users</h1>;


export default class Navigation extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" render = {() => {
                        return <Home name="Palace" place="Mars" />
                    }} />
                    <Route exact strict path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/users" component={Users} />
                    <Route component={Error} />

                </Switch>

            </div>
        </Router>

    )
  }
}
