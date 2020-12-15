import { types } from "../types/types";

const initialState = {
    meters: null,
    kilograms: null
}

export const bmiReducer = (state = {initialState} , action) => {

    switch (action.type) {
        case types.calculate:
            return {
                ...action.payload
            }

        case types.metric:
            return {
                symbol: 'kg',
                ...action.payload
            }

        case types.english:
            return {
                symbol: 'lb',
                ...action.payload
            }
    
        default:
            return state;
    }
}