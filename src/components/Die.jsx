import React from "react";

export const Die = (props) => {
  return (
    <div className="align flex h-12 w-12 cursor-pointer items-center justify-center rounded bg-white text-3xl font-bold shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      {props.value}
    </div>
  );
};
