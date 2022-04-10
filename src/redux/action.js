export function addToCart(obj) {
    return {
        type: 'cart/add',
        payload: obj
    }
}