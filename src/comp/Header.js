import React from "react";
import { Icon } from "semantic-ui-react";

const Header = () => {
  return (
// center the header
    <div className="ui menu center">
      <div className="ui container center">
        <h2>
          <Icon name="address book" />
          Contact Manager
        </h2>
      </div>
    </div>
  );
}

export default Header;