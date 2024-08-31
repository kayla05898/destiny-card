import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, name: "Groceries", amount: "$200" },
    { id: 2, name: "Utilities", amount: "$150" }
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.name}: {expense.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
