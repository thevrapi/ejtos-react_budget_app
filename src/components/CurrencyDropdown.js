import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleChange = e => {
        let value = e.target.value
        console.log(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }

    return (
        <div className={`alert alert-info`}>
            Currency (
            <select onChange={handleChange} value={currency} style={{backgroundColor:'transparent', border:'none'}}>
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupees</option>
            </select>
            )
        </div>
    );
};
export default CurrencyDropdown;