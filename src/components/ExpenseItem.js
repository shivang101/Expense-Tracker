import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 3, 28);

  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$295</div>
    </div>
  );
};

export default ExpenseItem;
