import React from "react";
import User from "./User";

class Users extends React.Component {
  renderUsers = users => {
    return users.map(user => <User key={user.id} user={user} />);
  };

  render() {
    return <div>{this.renderUsers(this.props.users)}</div>;
  }
}

export default Users;
