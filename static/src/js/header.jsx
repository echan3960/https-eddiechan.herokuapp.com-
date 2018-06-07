import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id='header'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>Eddie Chan</Link>
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={'hello'}>
                <NavItem eventKey={1}>Hello</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={'about'}>
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to={'projects'}>
                <NavItem eventKey={3}>Projects</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={5.1}>Action</MenuItem>
                <MenuItem eventKey={5.2}>Another action</MenuItem>
                <MenuItem eventKey={5.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}