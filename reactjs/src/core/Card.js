import React from 'react';
import { withRouter } from 'react-router-dom';
import { addProductToCart } from './helper/APICall';

const Card = ({
    product,
    history
}) => {

    const handleCart = () => {
        const selectedProduct = {
            user : 'Admin',
            product : product._id,
            quantity : 1
        }
        addProductToCart(selectedProduct)
            .then(() => {
                history.push('/cart');
            })
    }

    return (
        <div className="card text-dark bg-light border border-light">
            <div className="card-header text-center text-white">
                <b>{product.name}</b>
            </div>
            <img 
                src={require(`../product_images/${product.imageName}`)}
                alt="Not available"
                width='100%'
                height='50%'
                className='img-thumbnail'
            />
            <div className="card-body">
                    <p><b>Description : </b>{product.description}</p>
                    <p><b>Price : </b>${product.price}</p>
                
                <div className='row'>
                    <div className="col-12">
                        <button 
                            className="btn btn-inline btn-outline-success mt-2 mb-2"
                            onClick={handleCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card);