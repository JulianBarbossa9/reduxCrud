import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { editProductById } from "../actions/productsActions";

import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const [product, setSaveProduct] = useState({
    name: "",
    price: "",
    id: "",
  });

  const navigation = useNavigate()

  const dispatch = useDispatch();
  const productEdit = useSelector((state) => state.products.productToEdit);

  //Fill the state automatic
  useEffect(() => {
    if (productEdit) {
      setSaveProduct(productEdit);
    }
  }, [productEdit]);

  const { name, price, id } = product || {}; // Add a default value of an empty object

  // Read data in the form
  const onChangeForm = (e) => {
    setSaveProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  
  const submitProducEdited = (e) => {
    e.preventDefault();
    
    dispatch(editProductById(product))
    navigation('/')
  };
  

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card" key={id}>
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

            <form onSubmit={submitProducEdited}>
              <div className="form-group">
                <label htmlFor="">Name of the Product:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of the product"
                  name="name"
                  value={name}
                  onChange={onChangeForm}
                  />
              </div>

              <div className="form-group">
                <label htmlFor="">Price of the Product:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price of the product"
                  name="price"
                  value={price}
                  onChange={onChangeForm}
                  />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Edit Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
