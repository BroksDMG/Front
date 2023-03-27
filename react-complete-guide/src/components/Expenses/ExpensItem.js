import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensDate from "./ExpensDate";
function ExpensItem(props) {
  const [title,setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle('Updated!');
    console.log("Updated!");
  }
  
  
  return (
    <div className="bg-neutral-900 h-min  rounded-2xl m-2 my-4">
      <div className=" w-full flex items-center rounded-2xl bg-neutral-600 shadow-lg p-2 ">
        <ExpensDate date={props.date} />
        <div className="flex items-center  justify-between w-full">
          <h2 className="text-white mr-3 font-bold text-lg min-w-max">
            {title}
          </h2>
          <div className="flex items-center justify-center ml-auto font-bold text-white h-10 w-28 border border-white bg-purple-900 rounded-lg">
            {props.amount}
          </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div> 
  );
}

export default ExpensItem;
