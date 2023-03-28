import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput,setUeserInput] =useState({
  //     enteredTitle:" ",
  //     enteredAmount:" ",
  //     setEnteredDate:" "
  // })
  const changeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUeserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value
    // })
  };
  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUeserInput({
    //     ...userInput,
    //     enteredAmount: e.target.value
    // })
  };
  const changeDateHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUeserInput({
    //     ...userInput,
    //     enteredDate: e.target.value
    // })
    // setUeserInput((prevUesrInput)=>{
    //     return {...userInput,enteredDate: e.target.value}
    // })
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      tittle: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpanseData(expenseData)
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="bg-violet-300 rounded-2xl w-card p-3 my-5"
    >
      <div className="flex flex-wrap mr-20 ">
        <div className="flex flex-col mr-4">
          <label htmlFor="" className="font-bold">
            Title
          </label>
          <input
            type="text"
            onChange={changeTitleHandler}
            className="w-52 rounded-md"
            value={enteredTitle}
          />
        </div>
        <div className="flex flex-col mr-4">
          <label htmlFor="" className="font-bold">
            Amount
          </label>
          <input
            type="number"
            onChange={changeAmountHandler}
            min="0.01"
            step="0.01"
            value={enteredAmount}
            className="w-52 rounded-md"
          />
        </div>
        <div className="flex flex-col mr-4">
          <label htmlFor="" className="font-bold">
            Date
          </label>
          <input
            type="date"
            onChange={changeDateHandler}
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            className="w-52 rounded-md px-1"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex items-center justify-center ml-auto  text-white h-9 w-28  bg-purple-900 rounded-lg"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
