import React from 'react'
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

const BsNavLink = ({route, title}) => {
  return (
    <Link href={route}><a className="nav-link port-navbar-link"> {title} </a></Link>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='port-navbar port-default absolute' color="transparent" dark expand="md">
          <NavbarBrand className='port-navbar-brand' href="/">Weverton Souza</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='port-navbar-item'> <BsNavLink route='/' title='Home' /></NavItem>
              <NavItem className='port-navbar-item'> <BsNavLink route='/portifolios' title='Portifolios' /></NavItem>
              <NavItem className='port-navbar-item'> <BsNavLink route='/blogs' title='Blog' /></NavItem>
              <NavItem className='port-navbar-item'> <BsNavLink route='/about' title='About' /></NavItem>
              <NavItem className='port-navbar-item'> <BsNavLink route='/cv' title='Cv' /></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}