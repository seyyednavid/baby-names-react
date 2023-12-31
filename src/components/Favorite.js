import React from "react";

const Favorite = (props) => {
  const getProperColor = (baby) => {
    if (baby.sex === "m") {
      return "lightBlue";
    } else {
      return "pink";
    }
  };

  return (
    <div className="favorite">
      <h2>Favorite Names : </h2>
      <ul>
        {props.favoriteNames.map((baby) => (
          <li key={baby.id}>
            <button
              style={{ backgroundColor: getProperColor(baby) }}
              onClick={() => props.onRemoveFromFavorite(baby)}
            >
              {baby.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
