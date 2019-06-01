import React, { useContext } from 'react';
import Context from './context';
import { displayValue } from './utils';

const LoanSummary = () => {
    const {
        principal,
        term,
        interestRate,
        monthlyMortgagePayment
    } = useContext(Context);
    
    if (!principal || !term || !interestRate || !monthlyMortgagePayment)
        return null;
            
    return (
        <div>
            <div>Loan Amount: {displayValue(principal)}</div>
            <div>Number of Months: {term}</div>
            <div>Interest Rate: {interestRate}</div>
            <div>Total Paid: {displayValue(monthlyMortgagePayment * term)}</div>
            <div>Monthly Payment: {displayValue(monthlyMortgagePayment)}</div>
        </div>
    );
};

export default LoanSummary;
