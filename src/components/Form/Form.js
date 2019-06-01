import React from 'react';
import Principal from './Principal';
import LoanTerm from './LoanTerm';
import InterestRate from './InterestRate';
import LoanSummary from './LoanSummary';

const Form = () => (
    <form>
        <Principal />
        <LoanTerm />
        <InterestRate />
        <LoanSummary />
    </form>
);


export default Form;
