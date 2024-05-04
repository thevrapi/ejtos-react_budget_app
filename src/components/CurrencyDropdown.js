import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [chosenOption, setChosenOption] = useState('£ Pound')
    const [isActive, setIsActive] = useState(false)

    const handleChange = e => {
        let value = e.target.value
        console.log(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }

    const handleTrigger = (e) => {
        if(!e.target.hasAttribute('data-value')){
            setIsActive(!isActive)
        }
    }

    const handleDDclick = e => {
        const clickedEl = e.target
        let value = e.target.getAttribute('data-value')

        if(clickedEl.hasAttribute('data-value')){
            setChosenOption(clickedEl.textContent)
            dispatch({
                type: 'CHG_CURRENCY',
                payload: value
            })
            setIsActive(false)
        }
    }

    return (
        <div onClick={handleTrigger} className={`alert alert-success`} style={{position:'relative', cursor:'pointer'}}>
            Currency ({chosenOption})<span style={{
                  position: 'absolute',
                  right: '1em',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '8px solid black',
                //   transform: 'translate(0, 50%)'
            }}></span>

            <div onClick={handleDDclick} className={`myCustomDD alert alert-success`} style={{
                display: isActive ? 'flex' : 'none',
                flexDirection:'column',
                position:'absolute',
                top:'4em',
                left:'0',
                width:'100%'
            }}>
                <span data-value="$">$ Dollar</span>
                <span data-value="£">£ Pound</span>
                <span data-value="€">€ Euro</span>
                <span data-value="₹">₹ Rupees</span>
            </div>
        </div>
    );
};
export default CurrencyDropdown;