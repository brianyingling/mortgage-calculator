import React from 'react';
import Context from './context';

const LoanCalculator = () => {
    return (
        <Context.Provider value={{}}>
            <div>Loan Calculator</div>
        </Context.Provider>
    );
};

export default LoanCalculator;
