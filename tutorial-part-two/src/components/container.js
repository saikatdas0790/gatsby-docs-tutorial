import React from "react";
import containerStyles from "./contaniner.module.css";

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
);
