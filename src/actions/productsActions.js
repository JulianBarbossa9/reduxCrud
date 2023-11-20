//This is are the function that modified the state

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
  START_EDIT_PRODUCT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
} from '../types'

import clientAxios from '../config/axios'

import Swal from 'sweetalert2'



//add new product

export function addNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct())

    try {
      //Insert product in db
      await clientAxios.post('/products',product)
      dispatch(saveProduct(product))
      
      //Alert
      Swal.fire({
        title: 'Correct',
        text: 'Product add succesfully',
        icon: 'success'
      })
    } catch (error) {
      console.log(error)
      dispatch(errorCreateProduct(true))
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong',
        icon: 'error'
      })
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

// function to download product of the db
export function getAllProducts(products) {
  return async (dispatch) => {
    dispatch(getProducts())

    try {
      const response = await clientAxios.get('/products')
      // console.log(response)
      dispatch(showProducts(response.data))
    } catch (error) {
      dispatch(errorShowProducts(true))
      console.log(error)
    }
  }
}

const getProducts = () => ({
  type: START_DOWNLOAD_PRODUCTS,
  payload: true
})

const showProducts = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products
})

const errorShowProducts = (stateError) => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: stateError
})

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch(productDeletedById(id))

    try {
      await clientAxios.delete(`products/${id}`)
      // console.log(response)
      dispatch(productDeletedSucces())
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
    } catch (error) {
      dispatch(productDeletedError(true))
      console.log(error)
    }
   
  }
}

const productDeletedById = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id
})

const productDeletedSucces = () => ({
  type: PRODUCT_DELETE_SUCCES,
})

const productDeletedError = (stateError) => ({
  type: PRODUCT_DELETE_ERROR,
  payload: stateError
})

export function editProduct(product) {
  return async (dispatch) => {
    dispatch(getEditProduct(product))
  }
}

const getEditProduct = (product) => ({
  type: GET_PRODUCT_EDIT,
  payload: product
})


export function editProductById(product){
  return async (dispatch) => {
    dispatch(getEditProductId())
    try {
      await clientAxios.put(`/products/${product.id}`, product)
      // console.log(response.data)
      dispatch(editProductSucces(product))
    } catch (error) {
      dispatch(editProductError(true))
    }
  }
}

const getEditProductId = () => ({
  type: START_EDIT_PRODUCT,
  // payload: product
})

const editProductSucces = (product) => ({
  type: PRODUCT_EDIT_SUCCESS,
  payload: product
})

const editProductError = (stateError) => ({
  type: PRODUCT_EDIT_ERROR,
  payload: stateError
})
