/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  products: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line no-empty
    switch (action.type) {
      case LOAD_PRODUCTS:
        draft.loading = true;
        draft.error = false;
        draft.products = false;
        break;

      case LOAD_PRODUCTS_SUCCESS:
        draft.products = action.products;
        draft.loading = false;
        break;

      case LOAD_PRODUCTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_PRODUCT:
        draft.loading = true;
        draft.error = false;
        break;

      case ADD_PRODUCT_SUCCESS:
        if (draft.products)
          draft.products = [...draft.products, action.product];
        else draft.products = [action.product];
        draft.loading = false;
        break;

      case ADD_PRODUCT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
