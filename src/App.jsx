import { useEffect, useState } from 'react'
import './App.css'
import BalanceSummary from './components/BalanceSummary';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transaction, setTransaction] = useState([]);
  const transactionDataKey = "transaction";

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem(transactionDataKey));
    if(savedTransactions) {
      setTransaction(savedTransactions);
    }
  }, []);

  const updateHandler = function (transaction){
    // state update
    // storage update
    setTransaction(transaction);
    localStorage.setItem(transactionDataKey, JSON.stringify(transaction));
  }

  return (
    <>
      <h1>Expense Tracker Dashboard</h1>
      <BalanceSummary 
        transaction={transaction} />

      <TransactionList
        transaction={transaction}
        setTransaction={updateHandler} />

      <AddTransactionForm
        setTransaction={updateHandler} />
    </>
  )
}

export default App
