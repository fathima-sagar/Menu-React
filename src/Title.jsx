import React from "react";

function Title({ title }) {
  return (
    <div className="title">
      <h1>{title || "Default title"}</h1>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title;
