import React from "react";
import Users from "../components/users/Users";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/UsersAction";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <Users users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
