import React from "react";
import {Navbar, NavDropdown, MenuItem, Nav, NavItem,Button} from 'react-bootstrap';

export default React.createClass({

  handleSelect: function(){
    // do nothing.
  },

  render: function() {
    var Brand = (
     <span class="logo">
       <a href="/">
         <img src="<Replace pic>" height="33" width="120" alt="text here" /></a>
     </span>
   );
    return (
      <Navbar brand={Brand} inverse toggleNavKey={0}>
          <Nav right eventKey={0}> {/* This is the eventKey referenced */}
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="collapsible-navbar-dropdown">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
    );
  }
});
