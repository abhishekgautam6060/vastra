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

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:

    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case REGISTER_SUCCESSS:
    case LOGIN_SUCCESSS:
      return { ...state, isLoading: false, error: null, jwt: action.payload };

    case GET_USER__SUCCESSS:
      return { ...state, isLoading: false, error: null, user: action.payload };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER__FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
