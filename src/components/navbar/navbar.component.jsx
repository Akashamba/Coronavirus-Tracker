import React, { useState } from 'react';
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
import Logo from "../../assets/logo.png";
import {NavLink as Link} from 'react-router-dom';
import './navbar.styles.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="" light expand="md" className='navbar'>
        <NavbarBrand tag={Link} activeClassName='none' to="/"><img id='logo' src={Logo} alt='Coronavirus Tracker Logo'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem onClick={toggle}>
              <NavLink tag={Link} activeClassName='active' exact to='/'>Indian Stats</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
                <NavLink tag={Link} activeClassName='active' to='/state/Tamil Nadu'>District Stats</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink tag={Link} activeClassName='active' to='/global'>Global Stats</NavLink>
            </NavItem>
            <NavItem>
              {/*<NavLink disabled>Dark Mode</NavLink>*/}
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} activeClassName='none' to='/donate' onClick={toggle}>
                  Donate
                </DropdownItem>
                <DropdownItem onClick={toggle}>
                  Do's and Don'ts
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} activeClassName='none' to='/credits' onClick={toggle}>
                  Credits
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;
