import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }} // Use double curly braces for inline styles
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
