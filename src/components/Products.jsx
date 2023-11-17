import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../actions/productsActions'
import Product from './Product'

const Products = () => {

  const dispatch = useDispatch()
  
  
  
  useEffect(() => {
    const downloadProducts = () => dispatch(getAllProducts())
    downloadProducts()
  },[])
  
  const allProducts = useSelector((state) => state.products.products)
  // console.log(donwloadProducts)
  const error = useSelector((state) => state.products.error)
  const loading = useSelector((state) => state.products.loading)
  
  return (
    <>
      <h2 className='text-center my-5'>List Products</h2>

      {
        error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Something went wrong</p> : null
      }
      {
        loading ? <p className='text-center'>Loading...</p> : null
      }

      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        
        <tbody>
            {
              allProducts === 0 ? `There are no products` : (
                allProducts.map(product => (
                  <Product 
                    key={product.id}
                    product={product}
                  />
                ))
              )
            }

        </tbody>
      </table>
    </>
  )
}

export default Products