import {
  ADD_PRODUCT,
  ADD_PRODCUT_SUCCESFULLY,
  ADD_PRODUCT_ERROR
} from '../types'

//Each reducer have the state

const initialState = {
  products: [],
  error: null,
  loading: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    // add cases for different actions here
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload
      }
    case ADD_PRODCUT_SUCCESFULLY:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]//Copy of the state and and the product this come in action.payload
      }
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
