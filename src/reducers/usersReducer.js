const initialState = { loading: false, users: [] };

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_USERS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_USERS":
      return Object.assign({}, state, { users: action.payload, loading: true });
    default:
      return state;
  }
}
