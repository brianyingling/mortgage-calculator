import { actionTypes } from './actions'

const { 
    SET_AMORTIZATION_DATA,
    SET_INTEREST_RATE,
    SET_MONTHLY_MORTGAGE_PAYMENT,
    SET_PRINCIPAL,
    SET_TERM,
} = actionTypes;

const initialState = {
    amortizationData: [],
    interestRate: null,
    monthlyMortgagePayment: null,
    principal: '',
    term: null,
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_PRINCIPAL: {
            return {...state, principal: action.payload}
        }
        case SET_TERM: {
            return {...state, term: action.payload}
        }
        case SET_INTEREST_RATE: {
            return {...state, interestRate: action.payload}
        }
        case SET_MONTHLY_MORTGAGE_PAYMENT: {
            return {...state, monthlyMortgagePayment: action.payload}
        }
        case SET_AMORTIZATION_DATA: {
            return {...state, amortizationData: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {
    initialState,
    reducer
}
