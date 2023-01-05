import React, { useEffect } from "react";

const ArrayNumber = () => {
  function depth_col_creation() {
    let col = document.getElementById("array-depth-column");
    for (let i = 20; i > 0; i--) {
      let number = document.createElement("div");
      let depth = "array-line-" + i.toString();
      number.setAttribute("id", depth);
      col.appendChild(number);
      document.getElementById(depth).textContent = i;
    }
  }

  return (
    <>
      <div id="array-depth-column" className="array-column"></div>

      {useEffect(() => {
        depth_col_creation();
      }, [])}
    </>
  );
};

export default ArrayNumber;
