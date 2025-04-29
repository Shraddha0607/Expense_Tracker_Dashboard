import React, { useState } from 'react'

function BalanceSummary({transaction}) {
   const totalBalance = transaction.reduce((acc, curr) => acc + curr.amount, 0);
   const income = transaction.filter(t => t.amount>0).reduce((acc, curr) => acc + curr.amount, 0);
   const expense = transaction.filter(t => t.amount<0).reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className='card'>
      <h2> Balance Summary</h2>
      <p>Total Balance: {totalBalance}</p>
      <p>Total Income: {income} </p>
      <p>Total Expense: {expense} </p>
    </div>
  )
}

export default BalanceSummary
