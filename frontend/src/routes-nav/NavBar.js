import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import UserContext from '../UserContext';
import './NavBar.css';





// Provides navigation to the whole application. Shows up on ever accessible page and provides hidden items if logged in.

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);
  console.debug('NavBar', 'currentUser=', currentUser);

  function loggedInNav(args) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <div>
        <Navbar {...args}>
          <NavbarBrand href="/">Doggie Mobile Day Spa</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Pet
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/myPet">My Pets</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/addPet">Add Pet</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/profile">My Settings</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/" onClick={logout}>
                  Log out {currentUser.first_name || currentUser.username}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  function loggedOutNav(args) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
      <div>
        <Navbar {...args}>
          <NavbarBrand href="/">Doggie Mobile Day Spa</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/appointment">
                  Make an Appointment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery">
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutUs">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  return (
    <nav className="NavBar navbar navbar-expand-md mb-5">
      <NavItem>
        <NavLink href="/">
          Home
        </NavLink>
      </NavItem>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
};

export default NavBar;
