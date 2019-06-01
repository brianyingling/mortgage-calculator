const SET_AMORTIZATION_DATA = 'SET_AMORTIZATION_DATA';
const SET_INTEREST_RATE = 'SET_INTEREST_RATE';
const SET_MONTHLY_MORTGAGE_PAYMENT = 'SET_MONTHLY_MORTGAGE_PAYMENT';
const SET_PRINCIPAL = 'SET_PRINCIPAL';
const SET_TERM = 'SET_TERM';

const actionTypes = {
    SET_AMORTIZATION_DATA,
    SET_INTEREST_RATE,
    SET_MONTHLY_MORTGAGE_PAYMENT,
    SET_PRINCIPAL,
    SET_TERM,
};

const setAmortizationData = (payload) => ({
    type: SET_AMORTIZATION_DATA,
    payload,
});

const setInterestRate = (payload) => ({
    type: SET_INTEREST_RATE,
    payload,
});

const setMonthlyMortgagePayment = (payload) => ({
    type: SET_MONTHLY_MORTGAGE_PAYMENT,
    payload,
});

const setPrincipal = (payload) => ({
    type: SET_PRINCIPAL,
    payload,
});

const setTerm = (payload) => ({
    type: SET_TERM,
    payload,
});

export {
    actionTypes,
    setAmortizationData,
    setInterestRate,
    setMonthlyMortgagePayment,
    setPrincipal,
    setTerm,
};
