import React from "react";
import { redirect } from "react-router";

const Input = ({ label = null, error = null, name = "", ...props }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      {props.children}
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
