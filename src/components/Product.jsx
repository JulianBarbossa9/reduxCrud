import React from 'react'
import {  useNavigate } from 'react-router-dom'

//redux
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from '../actions/productsActions'
import Swal from 'sweetalert2'

const Product = ({ product }) => {

  const { name, id, price } = product

  const dispatch = useDispatch()
  const navigation = useNavigate()

  //CONFIRM IF YOU WANT TO DELETE
  const confirmDeleteProduct = (id) => {
    //ask the user

    Swal.fire({
      title: "Are you sure?",
      text: "If a product is deleted not is posible retrieve!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        //pass the action
        dispatch(deleteProduct(id))
        
      }
    });
  }

  const redirectEdit = product => {
    navigation(`/products/edit/${product.id}`)
    dispatch(editProduct(product))
  }

  return (
    <tr key={id}>
      <td>{name}</td>
      <td><span className='font-weight-bold'>${price}</span></td>
      <td className='acciones'>
        <button 
          // to={`/products/edit/${id}`} 
          type='button'
          className='btn btn-primary mr-2'
          onClick={() => redirectEdit(product)}
        >
          Edit
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => confirmDeleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Product