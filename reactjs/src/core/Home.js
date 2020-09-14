import React, { useEffect, useState } from 'react';
import Base from './Base';
import Card from './Card';
import { getAllProducts } from './helper/APICall';

const Home = () => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    const loadAllProducts = () => {
        getAllProducts()
            .then(data => {
                if(data.Error) {
                    console.log(data.Error);
                } else {
                    setProducts(data);
                    setLoading(false);
                }
            });
    };

    useEffect(() => {
        loadAllProducts();
    },[]);

    if(loading) {
        return(
            <Base>
                <div className='container bg-light alter-div'>
                    <h4>Loading...</h4>
                </div> 
            </Base>
        )
    }

    return (
        <div>
            <Base>
                <p className='bg-white text-center display-4 text-black pt-3 pb-3 mt-3'>Product List</p>
                <div className="container mx-auto row">
                    {products.length === 0 ? 
                    <div className='container bg-light alter-div'>
                        <h4>Oops! There are no products found in database</h4>
                    </div> :
                    products.map((product,index) => {
                        return (
                            <div key={index} className='col-4 mb-4'>
                                <Card product={product}/>
                            </div>
                        )
                    })}
                </div>
            </Base>
        </div>
    )
}

export default Home;