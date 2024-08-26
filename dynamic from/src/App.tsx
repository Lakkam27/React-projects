import { useState } from "react";
import ExpanseFilter from "./Expanse-tracker/ExpanseFilter";
import ExpanseList from "./Expanse-tracker/ExplanseList";
import ExpanseForm from "./Expanse-tracker/ExpanseForm";
export const categories=["Groceries","Utilities","Entertainment"];
function App() {
  const [selectCategory, setSelectCategory] = useState('');

  const [expanses, setExpanses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpanses(expanses.filter((exp) => exp.id !== id));
  };

  const filteredExpanses = selectCategory
    ? expanses.filter(exp => exp.category.toLowerCase() === selectCategory.toLowerCase())
    : expanses;

  return (
    <div>
      <div className="mb-3">
        <div className="mb-5">
          <ExpanseForm></ExpanseForm>
         </div>
        <ExpanseFilter onSelectCategory={category => setSelectCategory(category)} />
      </div>
      <ExpanseList expanse={filteredExpanses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
