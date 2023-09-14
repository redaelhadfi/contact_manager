import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Menu } from 'semantic-ui-react'

const Header = () => {
  return (
    // // center the header
    // <div className="ui  menu">
    //   <div className="ui container center">
    //     <h2>
    //       <Icon name="address book" />
    //       Contact Manager
        
    //     </h2>
    //   </div>
    // </div>


    <Menu pointing secondary size='massive' >

    <Menu.Item style={{  margin: "10px" }}
      name=' contact manager'
      icon='big address book' 
    />

 

    <Menu.Item
      name=''
      // active={activeItem === 'messages'}
      // onClick={this.handleItemClick}
    />

    <Menu.Menu position='right'>
    <Link to="/add">
    <button style={{  margin: "10px" }} className="ui basic button blue">
  <i class="icon user"></i>
  Add Friend
</button>
</Link>
    </Menu.Menu>
    
  </Menu>


  );
}

export default Header;

