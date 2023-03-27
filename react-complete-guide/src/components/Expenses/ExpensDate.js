import React from "react";

function ExpensDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div
      className="mr-3 font-semibold  bg-neutral-900 rounded-2xl border border-white 
        w-24 flex flex-col items-center text-white p-2"
    >
      <div className=" text-xs">{month}</div>
      <div className=" text-xs font-normal">{year}</div>
      <div className=" text-xl">{day}</div>
    </div>
  );
}

export default ExpensDate;
