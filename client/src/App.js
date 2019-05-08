import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import First from './first/first';

function Index(){
  return (
    <div>
      <ul>
        <p><a href="/first">First</a></p>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto ml-auto">Experiments</NavbarBrand>
            {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse> */}
          </Navbar>
          <Route path="/" exact component={Index} />
          <Route path="/first/" component={First} />
        </div>
      </Router>
    );
  }
}

export default App;
