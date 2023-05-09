import React, { useState } from 'react';

const IncomeForm = () => {
  const [income, setIncome] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Income source: ${source}, Amount: ${income}`);
    setIncome('');
    setSource('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="source">Income Source:</label>
      <select
        id="source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        required
      >
        <option value="">Select a source</option>
        <option value="salary">Salary</option>
        <option value="freelance">Freelance</option>
        <option value="investment">Investment</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="income">Amount:</label>
      <input
        type="number"
        id="income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        required
      />
      <button type="submit">Add Income</button>
    </form>

    
  );
};

export default IncomeForm;
