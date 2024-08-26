import React from 'react';
import { categories } from '../App';
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectCategory(event.target.value);
  };

  return (
    <select className="form-select" onChange={handleChange}>
      <option value="">All categories</option>
      {categories.map(category=><option key={category} value={category}></option>)}
    </select> 
  );
};

export default ExpenseFilter;
