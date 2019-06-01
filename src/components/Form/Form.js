import React, { useContext } from 'react';
import { displayValue } from './utils';
import Context from './context';

const Form = () => {
    const context = useContext(Context);
    const {
        interestRate,
        monthlyMortgagePayment,
        onInterestRateChange,
        onPrincipalChange,
        onTermChange,
        principal,
        term,
    } = context;
    return (
        <form>
            <div>
                <div><label htmlFor='principal'>Original Principal</label></div>
                <input name='principal' type="text" value={principal} onChange={onPrincipalChange}/>
            </div>
            <div>
                <div><label htmlFor='term'>Loan Term</label></div>
                <input name='term' type="text" value={term} onChange={onTermChange} />
            </div>
            <div>
                <div><label htmlFor='interest-rate'>Annual Interest Rate</label></div>
                <input name='interest-rate' type="text" value={interestRate} onChange={onInterestRateChange} />
            </div>
            {
                principal && term && interestRate && monthlyMortgagePayment && 
                <div>
                    <div>Loan Amount: {displayValue(principal)}</div>
                    <div>Number of Months: {term}</div>
                    <div>Interest Rate: {interestRate}</div>
                    <div>Total Paid: {displayValue(monthlyMortgagePayment * term)}</div>
                    <div>Monthly Payment: {displayValue(monthlyMortgagePayment)}</div>
                </div>
            }
        </form>
    )
};

export default Form;
