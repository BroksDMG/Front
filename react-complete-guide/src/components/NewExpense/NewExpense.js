import React from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const saveExpenseDataHandler=(enteredExpsnseData)=>{
        const expanseData={
            ...enteredExpsnseData,
            id:Math.random().toString()
        }
       props.onAddExpenseData(expanseData)
    }
  return (
    <div >
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
