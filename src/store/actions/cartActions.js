
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const getCart = (state) => { // root state
    return state.cartReducer.cart;
}

export const getNumberOfProductsInCart = (state) => { // state -> root state
    return state.cartReducer.cart.reduce((total, c) => total += c.quantity, 0);
}