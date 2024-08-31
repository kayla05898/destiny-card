import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense Submitted: ${expense}`);
    setExpense('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Enter expense"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
