import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import First from './first/first';
import Soundscape from './Soundscapes/soundscape';
// import Drawing from './Drawing/drawing';
import ImageCutter from './ImageCutter/imagecutter';
import PythonProcess from './RunPythonProcess/pythonprocess';
import ProfileCard from './CSS practice/ProfileCard';
import Welcome from './welcome';
import LandingPage from './CSS practice/LandingPage'


function MainPage(){
  return (
    <div>
      <Welcome/>
      <p><a href="/hello">Hello! 👋</a></p>
      <p><a href="/soundscape">Soundscape 🗻</a></p>
      <p><a href="/imagescraper">Image Cutter ✂️</a></p>
      <p><a href="/CSS/card/">Profile Card 😀</a></p>
      {/* <p><a href="/pythonprocess">Python Process Runner 🐍</a></p> */}
      {/* <p><a href="/drawing">Drawing 🎨</a></p> */}
      {/* <Row>
        <Col><p><a href="/hello">Hello! 👋</a></p></Col>
      </Row>
      <Row>
        <Col><p><a href="/soundscape">Soundscape 🗻</a></p></Col>
      </Row>
      <Row>
        <Col><p><a href="/imagescraper">Image Cutter ✂️</a></p></Col>
      </Row>
      <Row>
        <Col><p><a href="/practiceCSS/card/">Practice CSS ✍</a></p></Col>
      </Row> */}
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
          <div className="app-header">
            <h3 className="app-title"><Link to="/">Experiments</Link></h3>
          </div>
          {/* <Navbar color="light" light>
            <NavbarBrand href="/" className="mr-auto ml-auto">Experiments</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar> */}
          <Route path="/" exact component={MainPage} />
          <Route path="/hello/" component={First} />
          <Route path="/soundscape/" component={Soundscape} />
          {/* <Route path="/drawing/" component={Drawing} /> */}
          <Route path="/imagescraper/" component={ImageCutter} />
          <Route path="/CSS/card/" component={ProfileCard}/>
          <Route path="/practiceCSS/landing/" component={LandingPage}/>
          {/* <Route path="/pythonprocess/" component={PythonProcess} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
