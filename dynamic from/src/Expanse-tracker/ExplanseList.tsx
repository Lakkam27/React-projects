interface Expanse {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expanse: Expanse[];
  onDelete: (id: number) => void;
}

const ExpanseList = ({ expanse, onDelete }: Props) => {
  if(expanse.length==0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expanse.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(exp.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expanse.reduce((acc, exp) => exp.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpanseList;
