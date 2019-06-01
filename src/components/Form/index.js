import React, { useCallback, useEffect, useReducer } from 'react';
import {
    amort,
    calculateMontlhyMortgagePayment,
} from './utils';
import Context from './context';
import { initialState, reducer } from './reducer';
import {
    setMonthlyMortgagePayment,
    setAmortizationData,
    setPrincipal,
    setTerm,
    setInterestRate,
} from './actions';
import Form from './Form';
import AmortizationTable from '../AmortizationTable';

 const FormContainer = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const { 
        principal, 
        interestRate, 
        term, 
    } = state;

    useEffect(() => {
        const totalPayments = term * 12;
        const monthlyMortgagePayment = calculateMontlhyMortgagePayment(principal, totalPayments, interestRate);
        dispatch(setMonthlyMortgagePayment(monthlyMortgagePayment));
        
        const values = amort(principal, interestRate, term);
        dispatch(setAmortizationData(values));
    }, [interestRate, principal, term]);
    
    const onPrincipalChange = useCallback((e) => {
        dispatch(setPrincipal(e.currentTarget.value));
     }, []);

    const onTermChange = useCallback((e) => {
        dispatch(setTerm(e.currentTarget.value));
    }, []);

    const onInterestRateChange = useCallback((e) => {
        dispatch(setInterestRate(e.currentTarget.value));
    }, []);
    
    const value = {...state, onPrincipalChange, onTermChange, onInterestRateChange };
    return (
        <Context.Provider value={value}>
            <Form />
            <AmortizationTable />
        </Context.Provider>
    );
};

 export default FormContainer;
