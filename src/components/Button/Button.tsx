import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ReactComponent as Loader } from "assets/loader.svg";
import "./Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  isLoading?: boolean;
  className?: string;
}

function Button({ isLoading, to, className, children, ...props }: Props) {
  const navigate = useNavigate();
  const onClick = to ? () => navigate(to) : props.onClick;
  return (
    <button
      className={classNames("button", className)}
      onClick={onClick}
      {...props}
    >
      {!isLoading ? children : <Loader />}
    </button>
  );
}

Button.defaultProps = {
  to: undefined,
  isLoading: false,
  className: undefined,
};

export default Button;
