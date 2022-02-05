import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={FilterChangeHandler}
      />
      {filteredExpenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
