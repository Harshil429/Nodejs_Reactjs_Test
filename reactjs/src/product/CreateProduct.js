import React, { useEffect, useState } from 'react';
import { addNewProduct } from './helper/productAPI';
import Base from '../core/Base';
import { Redirect } from 'react-router-dom';

const CreateProduct = () => {

    const [values,setValues] = useState({
        name : '',
        description : '',
        quantity : '',
        price : '',
        loading : false,
        error : '',
        formData : '',
        redirect : false
    });

    // destructure
    const {name, description, quantity, price, loading, error, formData, redirect} = values;

    const preLoad = () => {
        setValues({ ...values, formData : new FormData() });
    }

    useEffect(() => {
        preLoad();
    },[]);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name] : value });
    }

    const onAdd = (event) => {
        event.preventDefault();
        setValues({ ...values, error : '', loading : true });
        addNewProduct(formData)
            .then(data => {
                if(data.Error) {
                    setValues({ ...values, error : data.Error });
                } else {
                    setValues({
                        ...values,
                        name : '',
                        description : '',
                        price : '',
                        quantity : '',
                        photo : '',
                        loading : false,
                        redirect : true
                    })
                }
            })
    };

    const performRedirect = () => {
        if(redirect) {
            return <Redirect to='/' />
        }
    };
 
    const errorMessage = () => {
        if(error) {
            return `${error}`;
        } else {
            return '';
        }
    }
    
    const newProductForm = () => {
        return (
            <div className='container form-div mt-3'>
                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Product Name" 
                            name='name'
                            value={name}
                            onChange={handleChange('name')}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="file" 
                            className="form-control" 
                            name='photo'
                            onChange={handleChange('photo')}
                            accept='image/*'
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                        name="description" 
                        className="form-control"
                        placeholder='Description'
                        onChange={handleChange('description')}
                        value={description}
                        cols="30" 
                        rows="3"
                        >
                        </textarea>
                    </div>
                    <div className="form-inline justify-content-between">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder='Quantity' 
                            name='quantity'
                            value={quantity}
                            onChange={handleChange('quantity')}
                            min='1'
                        />
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder='Unit Price' 
                            name='price'
                            value={price}
                            onChange={handleChange('price')}
                            min='1'
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-block mt-3 add-new text-white"
                        onClick={onAdd}
                    >
                        {loading ? 'Loading...' : 'Add New Product'}
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <Base>
                <p className='bg-white text-center display-4 text-black pt-3 pb-3 mt-5'>Create Product</p>
                <p className='text-danger text-center mt-3'>{errorMessage()}</p>
                {newProductForm()}
                {performRedirect()}
            </Base>
        </div>
    )
}

export default CreateProduct;