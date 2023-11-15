import React from 'react'

const NewProduct = () => {
  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Add new Product
            </h2>

            <form action="">
              <div className='form-group'>
                <label htmlFor="">Name of the Product:</label>
                <input 
                  type="text" 
                  className='form-control'
                  placeholder='Name of the product'
                  name='nameProduct'
                />
              </div>

              <div className='form-group'>
                <label htmlFor="">Price of the Product:</label>
                <input 
                  type="number" 
                  className='form-control'
                  placeholder='Price of the product'
                  name='price'
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewProduct