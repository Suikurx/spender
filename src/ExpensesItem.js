import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{expense.date}</div>
      <div className="expense-description">{expense.description}</div>
      <div className="expense-amount">{expense.amount}</div>
    </div>
  );
};

export default ExpenseItem;
