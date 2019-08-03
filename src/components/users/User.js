import React from "react";

class User extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        <h3 className="user-heading">{this.props.user.name}</h3>
      </div>
    );
  }
}

export default User;
