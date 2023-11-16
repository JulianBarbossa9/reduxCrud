//This is are the function that modified the state

import {
  ADD_PRODUCT,
  ADD_PRODCUT_SUCCESFULLY,
  ADD_PRODUCT_ERROR
} from '../types'

//add new product

export function addNewProductAction(product) {
  return (dispatch) => {
    dispatch(addProduct())

    try {
      dispatch(saveProduct(product))
    } catch (error) {
      dispatch(errorCreateProduct(true))
    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT, //action.type in the productsReducer
  payload: true
})

const saveProduct = (product) => ({
  type: ADD_PRODCUT_SUCCESFULLY,
  payload: product
})

const errorCreateProduct = (stateError) => ({
  type: ADD_PRODUCT_ERROR,
  payload: stateError
})