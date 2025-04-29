import { useEffect, useState } from 'react'
import './App.css'
import BalanceSummary from './components/BalanceSummary';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if(savedTransactions) {
      setTransaction(savedTransactions);
    }
  }, []);

  useEffect(() => {
    if(transaction.length > 0) {
      localStorage.setItem('transaction', JSON.stringify(transaction));
    }
  }, [transaction]);

  return (
    <>
      <h1>Expense Tracker Dashboard</h1>
      <BalanceSummary 
        transaction={transaction} />

      <TransactionList
        transaction={transaction}
        setTransaction={setTransaction} />

      <AddTransactionForm
        setTransaction={setTransaction} />
    </>
  )
}

export default App
