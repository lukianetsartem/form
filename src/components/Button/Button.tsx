import React from "react";
import { ReactComponent as Loader } from "assets/loader.svg";
import "./Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

function Button({ isLoading, children, ...props }: Props) {
  return (
    <button className="button" {...props}>
      {!isLoading ? children : <Loader />}
    </button>
  );
}

export default Button;
