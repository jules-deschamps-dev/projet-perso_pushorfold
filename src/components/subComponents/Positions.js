import React from "react";

const Positions = () => {
  const allpositions = ["sb", "bn", "co", "hj", "bt", "bq", "bc", "bs"];
  const allpositionsTxt = [
    "sb",
    "btn",
    "co",
    "hj",
    "mp2",
    "mp1",
    "utg2",
    "utg1",
    " ",
  ];
  let i = -1;
  return (
    <div id="array-position-line">
      <ul className="grid grid-cols-9 text-center mt-2">
        {allpositionsTxt.map((position) => {
          i++;
          return (
            <li
              id={allpositions[i]}
              className="border-transparent border-b-2 border-solid"
            >
              {position.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Positions;
