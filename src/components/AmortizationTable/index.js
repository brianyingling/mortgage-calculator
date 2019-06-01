import React, { useContext } from 'react';
import Context from '../Form/context';
import Row from '../Form/Row';

const AmortizationTable = () => {
    const { amortizationData } = useContext(Context);
    return (
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
    )
};

export default AmortizationTable;
