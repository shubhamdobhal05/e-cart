// for adding intem to cart


export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload : product

    }
}


// for deleting item from cart

export const deleteItem = (product) => {
    return {
        type: "DELETEITEM",
        payload : product

    }
}