import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
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
      <ExpenseList items={filteredExpense} />
    </Card>
  );
}
export default Expenses;
