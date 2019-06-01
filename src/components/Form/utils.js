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

const calculateMontlhyMortgagePayment = (startingLoanAmount, totalPayments, interestRate) => {
    if (!startingLoanAmount || !totalPayments || !interestRate)
        return;
    let interestRatePerMonth = interestRate / 12;
    return startingLoanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, totalPayments)) / (Math.pow(1 + interestRatePerMonth, totalPayments) - 1);
};

const displayValue = (number) => `$${parseInt(number, 10).toFixed(2)}`;

export {
    amort,
    calculateMontlhyMortgagePayment,
    displayValue
}

