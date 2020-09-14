import React from 'react';
import { updateQty } from './helper/cartAPI';

const LeftSideCart = ({
    cart
}) => {

    const handleMinus = (event) => {
        if(cart.quantity > 1) {
            updateQty({
                _id : cart._id,
                quantity : cart.quantity - 1
            }).then(data => {
                event.preventDefault();
            });
        }
    };

    const handlePlus = (event) => {
        updateQty({
            _id : cart._id,
            quantity : cart.quantity + 1
        }).then(data => {
            event.preventDefault();
        });
    };

    return (
        <div className='bg-light'>
            <div className="row">
                <div className="col-3">
                    <img 
                        src={require(`../product_images/${cart.product.imageName}`)} 
                        alt="Not available"
                        height='200'
                        width='250'
                        className='img-thumbnail'
                    />
                </div>
                <div className="col-9 pt-3 pb-3">
                    <div className="row">
                        <div className="col-9">
                            <b>{cart.product.name}</b>
                        </div>
                        <div className="col-3">
                            <b>Price : </b> ${cart.product.price}
                        </div>
                    </div> <br/>
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <button 
                                    className='btn btn-sm btn-light border border-dark mr-3'
                                    onClick={handleMinus}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                                    <span>{cart.quantity}</span>
                                <button 
                                    className='btn btn-sm btn-light border border-dark ml-3'
                                    onClick={handlePlus}
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> <hr/>
        </div>
    )
};

export default LeftSideCart;