import React from "react";

export const Die = (props) => {
  return (
    <div
      className={`align ${
        props.isHeld ? "bg-[#59E391]" : "bg-[#ffffff]"
      } flex h-10 w-10 cursor-pointer items-center justify-center rounded text-3xl font-bold shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
      onClick={props.holdDice}
    >
      {props.value}
    </div>
  );
};
