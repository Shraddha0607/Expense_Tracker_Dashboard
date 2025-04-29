import React from 'react'

function TransactionList({ transaction, setTransaction }) {

    const deleteHandler = function (id) {
        console.log(id);

        setTransaction((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <div className='card'>
            <h2>All Transactions</h2>
            {transaction.length === 0 ?
                (<p>No data available!</p>) :
                (<table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transaction.map((val) => (
                                <tr key={val.id}>
                                    <td>{val.description}</td>
                                    <td>{val.amount}</td>
                                    <td>
                                        <button onClick={() => deleteHandler(val.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>)

            }

        </div>
    )
}

export default TransactionList

