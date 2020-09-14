const { API } = require("../../backend");

export const getAllCartProducts = () => {
    return fetch(`${API}/cart`,{
        method : 'GET'
    })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const updateQty = (data) => {
    return fetch(`${API}/cart/update/quantity`,{
        method : 'POST',
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json",
        },
        body : JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(err => console.log(err));
};