import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  return (
    <div className='new-expense'>
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
      {
        !showForm ?
          (<button
            className='new-expense__actions'
            onClick={() => { setShowForm(true) }}>Add New Expense
          </button>
          ) : ( <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> )
      }
    </div>
  );
};

export default NewExpense;
