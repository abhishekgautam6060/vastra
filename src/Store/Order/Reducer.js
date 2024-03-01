import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESSS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESSS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESSS,
} from "./ActionType";

const initialState = {
  orders: [],
  order: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CREATE_ORDER_SUCCESSS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
        error: null,
      };

    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_ORDER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_ORDER_BY_ID_SUCCESSS:
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload,
      };

    case GET_ORDER_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case GET_ALL_ORDERS_SUCCESSS:
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload,
      };
    case GET_ALL_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
