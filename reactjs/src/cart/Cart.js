import React, { useEffect, useState } from 'react';
import Base from '../core/Base';
import { getAllCartProducts } from './helper/cartAPI';
import LeftSideCart from './LeftSideCart';

const Cart = () => {

    const [cart,setCart] = useState([]);

    const loadAllCartProducts = () => {
        getAllCartProducts()
            .then(data => {
                if(data.Error) {
                    console.log(data.Error);
                } else {
                    setCart(data);
                }
            });
    }

    useEffect(() => {
        loadAllCartProducts();
    },[])

    const totalAmount = () => {
        let total = 0;
        cart.map((cart) => {
            total = total + cart.product.price * cart.quantity;
        });
        return total;
    };
    
    const rightSideCart = () => {
        return (
            <div className='bg-light p-3'>
                <h5>Total amount : ${totalAmount()}</h5>
                <hr/>
                <button className='btn text-white btn-checkout'>GO TO CHECKOUT</button>
            </div>
        )
    };

    return (
        <Base>
            <p className='bg-white text-center display-4 text-black pt-3 pb-3 mt-5'>Cart</p>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        {
                        cart.length === 0 ? 
                        <div className='container bg-light alter-div'>
                            <h4>Cart is empty!</h4>
                        </div> :
                        cart.map((cart,index) => {
                            return (
                                <div key={index}>
                                    <LeftSideCart cart={cart} />
                                </div>
                            )
                        })}  
                    </div>
                    <div className="col-3">
                        {rightSideCart()}
                    </div>
                </div>
            </div>
        </Base>
    )
};

export default Cart;