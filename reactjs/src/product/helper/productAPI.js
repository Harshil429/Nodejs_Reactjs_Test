const { API } = require("../../backend");

// create product
export const addNewProduct = (product) => {
    return fetch(`${API}/create/product`,{
        method : 'POST',
        headers : {
            Accept : 'application/json'
        },
        body : product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
};