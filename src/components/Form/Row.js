import React from 'react';
import { displayValue } from './utils';

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

export default Row;
