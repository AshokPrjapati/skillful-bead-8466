import { ADD_TO_CART, CART_ERROR, CART_LOADING, CART_TOTAL, DELETE_TO_CART, GET_CART, ORDER_ERROR, ORDER_LOADING, PLACE_ORDER } from "./cart.actionTypes";

const initialState = {
    loading: false,
    error: "",
    cartProducts: [],
    cartTotal: 0,
    orderData: []
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case ADD_TO_CART: {
            return {
                ...state,
                loading: false,
                cartProducts: [...state.cartProducts, payload]
            }
        }

        case CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }

        case GET_CART: {
            return {
                ...state,
                loading: false,
                cartProducts: [...payload]
            }
        }

        case DELETE_TO_CART: {
            return {
                ...state,
                loading: false,
                cartProducts: payload
            }
        }

        case CART_TOTAL: {
            return {
                ...state,
                loading: false,
                cartTotal: +payload
            }
        }

        case ORDER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case PLACE_ORDER: {
            return {
                ...state,
                loading: false,
                orderData: payload
            }
        }

        case ORDER_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }

        default: return state;

    }

}