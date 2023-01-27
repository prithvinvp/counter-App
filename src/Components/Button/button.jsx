import { useState } from "react";
import "./button.css";

function buttonCustom(props) {
  return (
    <button
      className="text-slate-100 bg-black rounded-full py-6 px-9 text-6xl hover:bg-slate-700"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export default buttonCustom;
