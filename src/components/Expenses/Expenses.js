import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.item.filter((value) => {
    return value.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpense.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpense.length > 0 &&
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

          <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
