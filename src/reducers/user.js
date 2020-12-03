const initialState = ''

export default function user(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return action.response.user;
    default:
      return state;
  }
}
