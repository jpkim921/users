export function fetchUsers() {
  return dispatch => {
    dispatch({ type: "LOADING_USERS" });
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => dispatch(addUsers(users)));
  };
}

const addUsers = users => {
  return {
    type: "FETCH_USERS",
    payload: users
  };
};
