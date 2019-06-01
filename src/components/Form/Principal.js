import React, { useContext } from 'react';
import Context from './context';

const Principal = () => {
    const { principal, onPrincipalChange } = useContext(Context);
    return (
        <div>
            <div><label htmlFor='principal'>Original Principal</label></div>
            <input name='principal' type="text" value={principal} onChange={onPrincipalChange}/>
        </div>
    );
};

export default Principal;
