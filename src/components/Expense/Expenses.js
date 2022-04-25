import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectedYearHandler = (selectedYearData) => {
    setFilteredYear(selectedYearData);
  };
  const filteredExpense = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectedYear={selectedYearHandler}
      />
      {filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
