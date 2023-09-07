import React from "react";

const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>; // Use backticks for string interpolation
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
