import React, { useCallback, useEffect, useState } from 'react';

/**
 * 
 * startingLoanAmount - 100000
 * totalPayments - years * 12
 * interestRate - 0.05
 */
const calculateMontlhyMortgagePayment = (startingLoanAmount, totalPayments, interestRate) => {
    if (!startingLoanAmount || !totalPayments || !interestRate)
        return;
    let interestRatePerMonth = interestRate / 12;
    return startingLoanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, totalPayments)) / (Math.pow(1 + interestRatePerMonth, totalPayments) - 1);
};

const amort = (balance, interestRate, terms) => {
    if (!balance || !interestRate || !terms) return;
    const monthlyRate = interestRate / 12;
    const payment = balance * (monthlyRate / (1-Math.pow(1+monthlyRate, -terms)));

    const results = [];
    for (var i = 0; i < terms; ++i) {
        let interest = 0;
        let monthlyPrincipal = 0;
        let monthNumber = i + 1;
        interest = balance * monthlyRate;
        monthlyPrincipal = payment - interest;
        results.push({
            balance,
            interest,
            monthlyPrincipal,
            monthNumber,
        });
        balance = balance - monthlyPrincipal;
    }
    return results;
} 

const displayValue = (number) => parseInt(number, 10).toFixed(2);

const Row = ({
    monthNumber,
    balance,
    interest,
    monthlyPrincipal,
}) => (
    <tr>
        <td>{monthNumber}</td>
        <td>{displayValue(balance)}</td>
        <td>{displayValue(interest)}</td>
        <td>{displayValue(monthlyPrincipal)}</td>
    </tr>
);

 const Form = () => {
    const [principal, setPrincipal] = useState('');
    const [term, setTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState('');
    const [amortizationData, setAmortizationData] = useState([]);

    const onPrincipalChange = useCallback((e) => {
         setPrincipal(e.currentTarget.value);
     }, []);

    const onTermChange = useCallback((e) => {
        setTerm(e.currentTarget.value);
    }, []);

    const onInterestRateChange = useCallback((e) => {
        setInterestRate(e.currentTarget.value);
    }, [])
    
    useEffect(() => {
        const totalPayments = term * 12;
        const monthlyMortgagePayment = calculateMontlhyMortgagePayment(principal, totalPayments, interestRate);
        setMonthlyMortgagePayment(monthlyMortgagePayment);
        const values = amort(principal, interestRate, term);
        setAmortizationData(values);
    }, [term, principal, interestRate]);

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
                    <div>Number of Months: {displayValue(term)}</div>
                    <div>Interest Rate: {displayValue(interestRate)}</div>
                    <div>Total Paid: {displayValue(monthlyMortgagePayment * term)}</div>
                    <div>Monthly Payment: {displayValue(monthlyMortgagePayment)}</div>
                </div>
            }
            <table>
                <thead>
                    <tr>
                        <td>Month</td>
                        <td>Balance</td>
                        <td>Interest</td>
                        <td>Principal</td>
                    </tr>
                </thead>
                <tbody>
                    {amortizationData && amortizationData.map(Row)}
                </tbody>
            </table>
        </form>
    )
};

 export default Form;
