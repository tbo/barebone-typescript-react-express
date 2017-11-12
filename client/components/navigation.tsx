import * as React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {navigateTo} from '../router';

const handleSelect = e => navigateTo(e);

const Navigation = () => (
  <nav>
    <Nav bsStyle='pills' activeKey={'/'} onSelect={handleSelect}>
      <NavItem eventKey='/'>NavItem 1 content</NavItem>
      <NavItem eventKey='/echo/john_doe'>Echo Example</NavItem>
      <NavItem eventKey='/ajax'>Ajax Example</NavItem>
      <NavItem eventKey='/invalid'>Invalid link</NavItem>
    </Nav>
  </nav>
);

export default Navigation;
