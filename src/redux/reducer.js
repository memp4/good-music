const initialState = {
    cart: []
};

export default function rootReducer( state = initialState, action ) {
    switch(action.type) {
        case 'cart/add':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}