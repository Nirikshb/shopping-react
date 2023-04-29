import { createStore } from 'redux';

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return { ...state, products: action.payload };
  } else if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  } else if (action.type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  } else {
    return state;
  }
};

const store = createStore(reducer);

export default store;
