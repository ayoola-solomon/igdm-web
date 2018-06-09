import { SET_USER_DATA, SET_LOGGEDIN_FLAG } from "./actions";

const initialState = {
  isLoggedIn: false,
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGEDIN_FLAG:
      return { ...state, isLoggedIn: action.payload };
    case SET_USER_DATA:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default authReducer;
