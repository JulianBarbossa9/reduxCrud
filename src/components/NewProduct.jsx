import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Action redux
import { addNewProductAction } from '../actions/productsActions'
import { showAlert, hideAlertAction } from '../actions/alertActions'


import { useNavigate } from 'react-router-dom'

const NewProduct = () => {

  let navigate = useNavigate()

  //State of component
  const [name, setName ] = useState('')
  const [price, setPrice] = useState(0)

  //dispath create new function
  const dispatch= useDispatch()

  //Acces to global state
  const loading = useSelector((state) => state.products.loading )
  const error = useSelector( state => state.products.error)
  const alert = useSelector( state => state.alert.alert)
  // console.log(alert)

  
  


  //call the funcion product action
  const addProduct = (product) => dispatch( addNewProductAction(product) )
  


  const submitNewProduct = e => {
    e.preventDefault()

    //validate form
    if(name.trim() === '' || price <= 0){
      const alert = {
        msg: 'Both field are required',
        classes: 'alert alert-danger text-center text-uppercase p3 '
      } 
      
      dispatch(showAlert(alert))
      return 
    }

    //check if not exist error
    dispatch(hideAlertAction()) 


    //create new product
    addProduct({
      name,
      price,
    })

    //Redirect
    navigate('/')
  }
  
  
  
  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Add new Product
            </h2>

            { alert ? <p className={alert.classes}>{alert.msg}</p>: null }

            <form 
              onSubmit={submitNewProduct}
            >
              <div className='form-group'>
                <label htmlFor="">Name of the Product:</label>
                <input 
                  type="text" 
                  className='form-control'
                  placeholder='Name of the product'
                  name='nameProduct'
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="">Price of the Product:</label>
                <input 
                  type="number" 
                  className='form-control'
                  placeholder='Price of the product'
                  name='price'
                  value={price}
                  onChange={event => setPrice(Number(event.target.value))}
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Send
              </button>

              {
                loading ? <p>Loading...</p> : null
              }


              {
                error ? <p className='alert alert-danger p2 text-center mt-2'>Unexpetd Error call a developer =)</p> : null
              }
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewProduct