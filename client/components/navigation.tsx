import * as React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {navigateTo} from '../router';

const handleSelect = e => navigateTo(e);

const Navigation = () => (
  <nav>
    <Nav bsStyle='pills' activeKey={'/'} onSelect={handleSelect}>
      <NavItem eventKey='/'>NavItem 1 content</NavItem>
      <NavItem eventKey='/test1'>NavItem 2 content</NavItem>
      <NavItem eventKey='/test2'>NavItem 3 content</NavItem>
    </Nav>
  </nav>
);

export default Navigation;
