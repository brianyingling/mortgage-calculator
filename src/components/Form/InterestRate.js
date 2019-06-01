import React, { useContext } from 'react';
import Context from './context';

const InterestRate = () => {
    const { interestRate, onInterestRateChange } = useContext(Context);
    return (
        <div>
            <div>
                <label htmlFor='interest-rate'>
                    Annual Interest Rate
                </label>
            </div>
            <input 
                name='interest-rate' 
                type="text" 
                value={interestRate} 
                onChange={onInterestRateChange} 
            />
        </div>
    );
};

export default InterestRate;
