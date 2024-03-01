import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import {
  GET_USER_REQUEST,
  GET_USER__FAILURE,
  GET_USER__SUCCESSS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESSS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESSS,
} from "./ActionType";

const token = localStorage.getItem("jwt");

export const register = (userData) => async (dispatch) => {
  const registerRequest = () => ({ type: REGISTER_REQUEST });
  const registerSuccess = (user) => ({
    type: REGISTER_SUCCESSS,
    payload: user,
  });
  const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });

  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);

    const user = response.data;
    if (user.jwtToken) {
      localStorage.setItem("jwt", user.jwtToken);
    }
    console.log("user ", user);
    dispatch(registerSuccess(user.jwtToken));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const login = (userData) => async (dispatch) => {
  const loginRequest = () => ({ type: LOGIN_REQUEST });
  const loginSucess = (user) => ({ type: LOGIN_SUCCESSS, payload: user });
  const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

  dispatch(loginRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);

    const user = response.data;
    if (user.jwtToken) {
      localStorage.setItem("jwt", user.jwtToken);
    }
    console.log("user ", user);
    dispatch(loginSucess(user.jwtToken));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const getUser = (jwt) => async (dispatch) => {
  const getUserRequest = () => ({ type: GET_USER_REQUEST });

  const getUserSuccess = (user) => ({
    type: GET_USER__SUCCESSS,
    payload: user,
  });

  const getUserFailure = (error) => ({
    type: GET_USER__FAILURE,
    payload: error,
  });

  console.log(jwt);
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const user = response.data;
    console.log("user ", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
