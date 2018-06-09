import { set, remove } from "../../utils/localStorage";

export const SET_USER_DATA = "SET_USER_DATA";
export const SET_LOGGEDIN_FLAG = "SET_LOGGEDIN_FLAG";
export const TOKEN = "TOKEN";

export const setUserData = data => ({
  type: SET_USER_DATA,
  payload: data
});

export const setLoggedInFlag = flag => ({
  type: SET_LOGGEDIN_FLAG,
  payload: flag
});

export const logInUser = data => dispatch => {
  if (data.access_token) {
    set(TOKEN, data.access_token);
    return dispatch(setLoggedInFlag(true));
  }
  remove(TOKEN);
  return dispatch(setLoggedInFlag(false));
};
