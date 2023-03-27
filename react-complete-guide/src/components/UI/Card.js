import React from "react";

function Card(props) {
  let clasess= "bg-neutral-900 h-min w-card rounded-2xl p-2 m-2"+props.children 
  console.log(clasess);
  return (
    <div
    className={clasess}
    >
      {props.children}
    </div>
  );
}

export default Card;
