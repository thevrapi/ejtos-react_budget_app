
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, expenses, currency, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, val) => total + val.cost, 0);


    const handleBudgetChange = (event) => {
        const updatedBudget = Number(event.target.value);

        if(updatedBudget >= totalExpenses){
            setNewBudget(updatedBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget
            });
        }
        else{
            alert('You cannot reduce the budget lower than the spending');
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;