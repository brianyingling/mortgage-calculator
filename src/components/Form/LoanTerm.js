import React, { useContext } from 'react';
import Context from './context';

const LoanTerm = () => {
    const { onTermChange, term } = useContext(Context);
    return (
        <div>
            <div><label htmlFor='term'>Loan Term</label></div>
            <input name='term' type="text" value={term} onChange={onTermChange} />
        </div>
    );
};

export default LoanTerm;
