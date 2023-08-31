import React from "react";
import "./Input.css";

function Input(props: React.HTMLProps<HTMLInputElement>) {
  return <input className="input" {...props} />;
}

export default Input;
