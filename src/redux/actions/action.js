import { ADD_CART, RMT_CART, RMT_ONE } from "../reducers/reducer";

export const ADD = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: RMT_CART,
    payload: id,
  };
};


export const REMOVEONE = (item) => {
  return {
    type: RMT_ONE,
    payload: item,
  };
};