import React, { Component } from 'react';
import { FormControl, Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo192.png';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    let baselink = '/'; //  /landing_reactApp/ or /index/ for dev
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href={baselink}>
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              /> 
            </Navbar.Brand> 
            <div className="logo-text">
              Landing app
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href={baselink}> Home </Nav.Link>
                <Nav.Link href={baselink+'about'}> About Us </Nav.Link>
                <Nav.Link href={baselink+'contacts'}> Contacts </Nav.Link>
                <Nav.Link href={baselink+'blog'}> Blog </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 mb-1"
                />
                <Button variant="outline-info" className="mb-1"> Search </Button>
              </Form>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router basename="/landing_reactApp">
          <Switch>
            <Route exact path={baselink} component={Home} />
            <Route exact path={baselink+'about'} component={About} />
            <Route exact path={baselink+'contacts'} component={Contacts} />
            <Route exact path={baselink+'blog'} component={Blog} />
          </Switch>
        </Router>
      </>
    )
  }
}