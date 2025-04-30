import React, { useState } from 'react'

function BalanceSummary({ transaction }) {

  const {total, expense, income} = transaction.reduce((acc, curr) =>
  ({
    total: acc.total + curr.amount,
    expense: acc.expense + (curr.amount < 0 ? curr.amount : 0),
    income: acc.income + (curr.amount > 0 ? curr.amount : 0)
  }),
    { "total": 0, "income": 0, "expense": 0 });

  return (
    <div className='card'>
      <h2> Balance Summary</h2>
      <p>Total Balance: {total}</p>
      <p>Total Income: {income} </p>
      <p>Total Expense: {expense} </p>
    </div>
  )
}

export default BalanceSummary
