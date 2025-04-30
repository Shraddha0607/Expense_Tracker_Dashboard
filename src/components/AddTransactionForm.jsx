import React, { useState } from 'react'

function AddTransactionForm({ setTransaction }) {

    const onSubmitHandler = function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (data.description === '' || data.amount === '') {
            return;
        }

        const newTransaction = {
            id: Date.now(),
            description: data.description,
            amount: parseFloat(data.amount)
        };

        setTransaction((prevData) => [newTransaction, ...prevData]);

    }

    return (
        <div className='card'>
            <h2> Add Transaction</h2>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input className='form-control' name="description" type="text"></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Amount</label>
                    <input className='form-control' name="amount" type="number"></input>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default AddTransactionForm
