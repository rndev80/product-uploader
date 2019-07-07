/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from './constants';

/**
 * Load the products, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PRODUCTS
 */
export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
  };
}

/**
 * Dispatched when the products are loaded by the request saga
 *
 * @param  {array} products The products data
 *
 * @return {object}      An action object with a type of LOAD_PRODUCTS_SUCCESS passing the products
 */
export function productsLoaded(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
  };
}

/**
 * Dispatched when loading the products fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PRODUCTS_ERROR passing the error
 */
export function productsLoadingError(error) {
  return {
    type: LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function addProduct() {
  return {
    type: ADD_PRODUCT,
  };
}

export function productAdded(product) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    product,
  };
}

export function productAddingError(error) {
  return {
    type: ADD_PRODUCT_ERROR,
    error,
  };
}

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
}

export function productUpdated(product) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    product,
  };
}

export function productUpdatingError(error) {
  return {
    type: UPDATE_PRODUCT_ERROR,
    error,
  };
}

export function uploadFile(file, productId) {
  return {
    type: UPLOAD_FILE,
    file,
    productId,
  };
}

export function fileUploaded(file) {
  return {
    type: UPLOAD_FILE_SUCCESS,
    file,
  };
}

export function fileUploadingError(error) {
  return {
    type: UPLOAD_FILE_ERROR,
    error,
  };
}

export function getProduct(productId) {
  return {
    type: GET_PRODUCT,
    productId,
  };
}

export function getProductSuccess(product) {
  return {
    type: GET_PRODUCT_SUCCESS,
    product,
  };
}

export function productGettingError(error) {
  return {
    type: GET_PRODUCT_ERROR,
    error,
  };
}
