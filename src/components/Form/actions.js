const SET_MONTHLY_MORTGAGE_PAYMENT = 'SET_MONTHLY_MORTGAGE_PAYMENT';
const SET_AMORTIZATION_DATA = 'SET_AMORTIZATION_DATA';
const SET_PRINCIPAL = 'SET_PRINCIPAL';
const SET_TERM = 'SET_TERM';
const SET_INTEREST_RATE = 'SET_INTEREST_RATE';

const actionTypes = {
    SET_MONTHLY_MORTGAGE_PAYMENT,
    SET_AMORTIZATION_DATA,
    SET_PRINCIPAL,
    SET_TERM,
    SET_INTEREST_RATE,
}

const setMonthlyMortgagePayment = (payload) => ({
    type: SET_MONTHLY_MORTGAGE_PAYMENT,
    payload,
});

const setAmortizationData = (payload) => ({
    type: SET_AMORTIZATION_DATA,
    payload,
})

const setPrincipal = (payload) => ({
    type: SET_PRINCIPAL,
    payload,
});

const setTerm = (payload) => ({
    type: SET_TERM,
    payload,
});

const setInterestRate = (payload) => ({
    type: SET_INTEREST_RATE,
    payload,
});

export {
    actionTypes,
    setMonthlyMortgagePayment,
    setAmortizationData,
    setPrincipal,
    setTerm,
    setInterestRate,
};
