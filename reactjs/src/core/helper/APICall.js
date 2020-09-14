const { API } = require("../../backend");

// list of all products
export const getAllProducts = () => {
    return fetch(`${API}/products`,{
        method : 'GET'
    })
    .then(response => response.json())
    .catch(err => console.log(err));
};

// add product into the cart
export const addProductToCart = (product) => {
    return fetch(`${API}/add/cart`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            Accept : 'application/json'
        },
        body : JSON.stringify(product)
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};