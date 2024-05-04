
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{
            padding: '0 .4em',
            borderRadius:'100vh',
            backgroundColor:'green',
            fontWeight:'700',
            fontSize:'1.3em',
            color:'white',
            border:'none',
            height:'fit-content'
        }} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{
            padding: '0 .5em',
            borderRadius:'100vh',
            backgroundColor:'#cc0000',
            fontWeight:'700',
            fontSize:'1.3em',
            color:'white',
            border:'none',
            height:'fit-content'
        }} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;