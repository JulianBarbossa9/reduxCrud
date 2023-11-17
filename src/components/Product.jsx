import React from 'react'
import { Link } from 'react-router-dom'

//redux
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../actions/productsActions'

const Product = ({ product }) => {

  const { name, id, price } = product

  const dispatch = useDispatch()

  //CONFIRM IF YOU WANT TO DELETE
  const confirmDeleteProduct = (id) => {
    //ask the user


    //pass the action
    dispatch(deleteProduct(id))
  }

  return (
    <tr key={id}>
      <td>{name}</td>
      <td><span className='font-weight-bold'>${price}</span></td>
      <td className='acciones'>
        <Link 
          to={`/products/edit/${id}`} 
          className='btn btn-primary mr-2'
        >
          Edit
        </Link>
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