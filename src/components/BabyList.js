import React from "react";

const BabyList = (props) => {
  const getProperColor = (baby) => {
    if (baby.sex === "m") {
      return "lightBlue";
    } else {
      return "pink";
    }
  };

  return (
    <div>
      <ul>
        {props.babyNames.map((baby) => {
          return (
            <li key={baby.id}>
              <button
                style={{ backgroundColor: getProperColor(baby) }}
                onClick={() => props.onAddToFavorite(baby)}
              >
                {baby.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BabyList;
