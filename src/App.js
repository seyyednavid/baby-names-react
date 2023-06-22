import React, { useState } from "react";
import Search from "./components/Search";
import BabyList from "./components/BabyList";
import Favorite from "./components/Favorite";
import Button from "./components/UI/Button";
import babyNames from "../src/data/babyNamesData.json";
import "./App.css";

function App() {
  const [searchContent, setSearchContent] = useState("");
  const [babyNamesList, setBabyNamesList] = useState(
    babyNames.sort((a, b) => a.name.localeCompare(b.name))
  );
  const [favoriteNamesList, setFavoriteNamesList] = useState([]);
  const [nameGenderFilter, setNameGenderFilter] = useState(null);

  const getSearchContent = (searchCtx) => {
    setSearchContent(searchCtx);
  };

  const filteredBabies = babyNamesList.filter((baby) => {
    const nameMatches = baby.name
      .toLocaleLowerCase()
      .includes(searchContent.toLocaleLowerCase());
    if (nameGenderFilter === null) {
      return nameMatches;
    } else {
      return nameMatches && baby.sex === nameGenderFilter;
    }
  });

  const addToFavoriteHandler = (baby) => {
    setFavoriteNamesList((prevState) => [...prevState, baby]);
    setBabyNamesList((prevState) => prevState.filter((b) => b.id !== baby.id));
  };

  const RemoveFromFavoriteHandler = (baby) => {
    setFavoriteNamesList((prevState) =>
      prevState.filter((b) => b.id !== baby.id)
    );
    setBabyNamesList((prevState) => [...prevState, baby].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const filterByGender = (genderType) => {
    setNameGenderFilter(genderType);
  };

  return (
    <div className="App">
      <div className="search-section">
        <Search onSearch={getSearchContent} searchContent={searchContent} />
        <Button
          active={nameGenderFilter === null}
          onClick={() => filterByGender(null)}
        >
          All
        </Button>
        <Button
          active={nameGenderFilter === "f"}
          onClick={() => filterByGender("f")}
          color="pink"
        >
          Female
        </Button>
        <Button
          active={nameGenderFilter === "m"}
          onClick={() => filterByGender("m")}
          color="lightBlue"
        >
          Male
        </Button>
      </div>

      <Favorite
        favoriteNames={favoriteNamesList}
        onRemoveFromFavorite={RemoveFromFavoriteHandler}
      />

      <BabyList
        babyNames={filteredBabies}
        onAddToFavorite={addToFavoriteHandler}
      />
    </div>
  );
}

export default App;
