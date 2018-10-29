import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';


const Navbar = (props) => {
  return (
      <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/user/Asabeneh">User Asabeneh</NavLink></li>
          <li><NavLink to="/user/John">User John</NavLink></li>

      </ul>
  )
}


export default Navbar

