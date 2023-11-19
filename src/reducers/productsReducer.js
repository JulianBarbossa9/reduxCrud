import {
  ADD_PRODUCT,
  ADD_PRODCUT_SUCCESFULLY,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCES,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,

} from "../types";

//Each reducer have the state

const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
  productToEdit: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // add cases for different actions here
    case START_DOWNLOAD_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODCUT_SUCCESFULLY:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload], //Copy of the state and and the product this come in action.payload
      };
    case ADD_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
    case PRODUCT_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: false,
        loading: false
      }
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload
      }
    case PRODUCT_DELETE_SUCCES:
      return {
        ...state,
        products: state.products.filter(product => product.id !== state.productDelete),
        productDelete: null
      }
    case GET_PRODUCT_EDIT:
      return {
        ...state,
        productToEdit: action.payload
      }
    default:
      return state;
  }
}
